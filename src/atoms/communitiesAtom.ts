import { atom } from "recoil";
import { FieldValue, Timestamp } from "firebase/firestore";

export interface Community {
  id: string;
  creatorId: string;
  createdAt?: Timestamp;
  numberOfMembers: number;
  privacyType: "public" | "restrictied" | "private";
}

export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
}

interface CommunityState {
  [key: string]:
    | CommunitySnippet[]
    | { [key: string]: Community }
    | Community
    | boolean
    | undefined;
  mySnippets: CommunitySnippet[];
  initSnippetsFetched: boolean;
  visitedCommunities: {
    [key: string]: Community;
  };
  currentCommunity: Community;
}

const defaultCommunity: Community = {
  id: "",
  creatorId: "",
  numberOfMembers: 0,
  privacyType: "public",
};

export const defaultCommunityState: CommunityState = {
  mySnippets: [],
  initSnippetsFetched: false,
  visitedCommunities: {},
  currentCommunity: defaultCommunity,
};

export const communityState = atom<CommunityState>({
  key: "communitiesState",
  default: defaultCommunityState,
});
