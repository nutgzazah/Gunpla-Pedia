const Collection = require('../Models/Collection');
const User = require('../Models/Users');

// Method to add a product to a user's collection
exports.addToCollection = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Check if the product is already in the collection
        if (user.collection.includes(productId)) {
            return res.status(400).json({ error: "Product already in collection" });
        }

        // Add the product to the user's collection
        user.collection.push(productId);
        await user.save();

        res.json({ message: "Product added to collection successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Method to remove a product from a user's collection
exports.removeFromCollection = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the product exists in the user's collection
        if (!user.collection.includes(productId)) {
            return res.status(400).json({ error: "Product not found in user's collection" });
        }

        // Remove the product from the user's collection
        user.collection = user.collection.filter(id => id.toString() !== productId.toString());
        await user.save();

        res.json({ message: "Product removed from collection successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Method to get all products in a user's collection
exports.getCollection = async (req, res) => {
    const userId = req.params.userId;
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Fetch all products in the user's collection
        const collection = await Product.find({ _id: { $in: user.collection } });
        res.json(collection);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
