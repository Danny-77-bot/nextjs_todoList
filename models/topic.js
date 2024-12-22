import mongoose from 'mongoose';

// Define the schema for the Topic model
const TopicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
      trim: true, // Remove extra spaces around the title
      minlength: [3, 'Title must be at least 3 characters long'], // Custom validation
    },
    description: {
      type: String,
      required: true, // Description is required
      trim: true, // Remove extra spaces around the description
      minlength: [5, 'Description must be at least 5 characters long'], // Custom validation
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create the Topic model
const Topic = mongoose.models.Topic || mongoose.model('Topic', TopicSchema);
export default Topic;

