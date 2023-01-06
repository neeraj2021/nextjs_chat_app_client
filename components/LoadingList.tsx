import { List, Skeleton } from "@mui/material";

interface ILoadingList {
  // eslint-disable-next-line react/require-default-props
  limit?: number;
}

function LoadingList({ limit }: ILoadingList) {
  return (
    <List>
      {Array(limit ?? 10)
        .fill(null)
        .map((_item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Skeleton key={index} variant="text" sx={{ fontSize: "2rem" }} />
        ))}
    </List>
  );
}

export default LoadingList;
