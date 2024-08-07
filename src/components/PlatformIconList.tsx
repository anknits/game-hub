import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    apple: FaApple,
    android: FaAndroid,
    xbox: FaXbox,
    playstation: FaPlaystation,
    iphone: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconsMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
