import mongoose, { model, Schema } from "mongoose";

const TournamentSchema = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    streamLink: { type: String, required: true },
    description: { type: String },
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    entryFee: { type: Number, required: true, default: 10 },
    visibility: { type: String, default: "PUBLIC" },
    image: { type: String },
    isActive: { type: Boolean, default: true },
    matches: { type: [Schema.Types.ObjectId], ref: "Match", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Tournament ||
  model("Tournament", TournamentSchema);
