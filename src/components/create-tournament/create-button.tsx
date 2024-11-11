"use client";
import React from "react";
import { Tournament } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTournament } from "@/actions/tournament/create-tournament";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateButton = (tournament: Tournament) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createTournament,
    onSuccess: (res) => {
      toast.info(res.message);
      queryClient.invalidateQueries({ queryKey: ["create-tournament"] });
      router.replace(`/tournament/edit/${res.tournament._id}`);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <button
      className={`bg-white px-6 py-2 rounded-lg text-black font font-semibold mt-10 active:scale-95 transition-transform disabled:scale-100 disabled:bg-gray-400`}
      onClick={() => mutation.mutate(tournament)}
      disabled={mutation.isPending}
    >
      Create
    </button>
  );
};

export default CreateButton;
