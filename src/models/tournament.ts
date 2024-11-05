import mongoose, { model, Schema } from "mongoose";

const TournamentSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  host:{}
});

export default mongoose.models.Tournament ||
  model("Tournament", TournamentSchema);
