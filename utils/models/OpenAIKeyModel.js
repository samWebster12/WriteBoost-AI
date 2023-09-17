// Open AI Key store model to preserve Open AI Keys across restarts.
import mongoose from "mongoose";

const openAIKeySchema = new mongoose.Schema({
  shop_id: {
    type: String,
    required: true,
  },
  open_ai_key: {
    type: String,
    required: true,
  },
});

const openAIKeyModel = mongoose.model("openAIKey", openAIKeySchema);

export default openAIKeyModel;
