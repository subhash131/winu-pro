import { Tournament, VisibilityT } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type TournamentForm = Omit<Tournament, "endDate" | "startDate"> & {
  startDate?: string;
  endDate?: string;
};

const initialState: TournamentForm = {
  description: "",
  entryFee: 0,
  host: "",
  isActive: true,
  matches: [],
  name: "",
  streamLink: "",
  visibility: "PUBLIC",
};

const tournamentForm = createSlice({
  name: "tournament-form",
  initialState: initialState,
  reducers: (create) => ({
    setTournament: create.reducer<TournamentForm>((state, action) => {
      state.description = action.payload.description;
      state.endDate = action.payload.endDate;
      state.entryFee = action.payload.entryFee;
      state.host = action.payload.host;
      state.image = action.payload.image;
      state.isActive = action.payload.isActive;
      state.matches = action.payload.matches;
      state.name = action.payload.name;
      state.streamLink = action.payload.streamLink;
      state.visibility = action.payload.visibility;
      state.startDate = action.payload.startDate;
    }),
    setVisibility: create.reducer<VisibilityT>((state, action) => {
      state.visibility = action.payload;
    }),
    setName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
    setStreamLink: create.reducer<string>((state, action) => {
      state.streamLink = action.payload;
    }),
    setStartDate: create.reducer<string>((state, action) => {
      state.startDate = action.payload;
    }),
    setEndDate: create.reducer<string>((state, action) => {
      state.endDate = action.payload;
    }),
    setEntryFee: create.reducer<number>((state, action) => {
      state.entryFee = action.payload;
    }),
    setDescription: create.reducer<string>((state, action) => {
      state.description = action.payload;
    }),
    setImage: create.reducer<string>((state, action) => {
      state.image = action.payload;
    }),
    setMatches: create.reducer<string[]>((state, action) => {
      state.matches = action.payload;
    }),
    setHost: create.reducer<string>((state, action) => {
      state.host = action.payload;
    }),
    setIsActive: create.reducer<boolean>((state, action) => {
      state.isActive = action.payload;
    }),
  }),
});

export const {
  setTournament,
  setVisibility,
  setName,
  setDescription,
  setEndDate,
  setEntryFee,
  setHost,
  setImage,
  setIsActive,
  setMatches,
  setStartDate,
  setStreamLink,
} = tournamentForm.actions;
export default tournamentForm.reducer;
