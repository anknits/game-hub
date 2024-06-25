import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 90 ? "green" : score > 80 ? "orange" : score > 70 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={1} borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
