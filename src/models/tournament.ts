import mongoose, { model, Schema } from "mongoose";

const TournamentSchema = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    streamLink: { type: String, required: true },
    description: { type: String },
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    entryFee: { type: Number, default: 10 },
    visibility: { type: String, default: "PUBLIC" },
    image: { type: String },
    clans: { type: [Schema.Types.ObjectId], ref: "Clan", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Tournament ||
  model("Tournament", TournamentSchema);
