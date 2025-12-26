import { Box, SimpleGrid, AspectRatio, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoItem {
  id: number;
  src: string;
  type: '9:16' | '16:9';
}

const VideoCard = ({ video, isActive, onToggleMute }: { video: VideoItem, isActive: boolean, onToggleMute: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isActive;
    }
  }, [isActive]);

  return (
    <Box 
      borderRadius="24px" 
      overflow="hidden" 
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor={isActive ? "purple.400" : "whiteAlpha.100"}
      transition="all 0.3s"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggleMute}
      cursor="pointer"
      _hover={{ transform: 'scale(1.02)', borderColor: isActive ? 'purple.400' : 'whiteAlpha.300', zIndex: 10 }}
    >
      <AspectRatio ratio={video.type === '9:16' ? 9/16 : 16/9}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted={!isActive}
          loop
          playsInline
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </AspectRatio>

      {/* Mute/Unmute Overlay Button */}
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        align="center"
        justify="center"
        bg="blackAlpha.200"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s"
        pointerEvents="none"
      >
        <IconButton
          aria-label={isActive ? "Mute" : "Unmute"}
          icon={isActive ? <Volume2 size={32} /> : <VolumeX size={32} />}
          variant="solid"
          colorScheme={isActive ? "purple" : "blackAlpha"}
          borderRadius="full"
          size="lg"
          w="70px"
          h="70px"
          bg={isActive ? "purple.500" : "rgba(0,0,0,0.6)"}
          transform={isHovered ? "scale(1)" : "scale(0.8)"}
          transition="all 0.2s"
          backdropFilter="blur(4px)"
          boxShadow="xl"
        />
      </Flex>
    </Box>
  );
};

const VideoGrid = () => {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const videos: VideoItem[] = [
    { id: 1, src: "/video1.mp4", type: '9:16' },
    { id: 3, src: "/video3.mp4", type: '9:16' },
    { id: 5, src: "/video5.mp4", type: '9:16' },
    { id: 11, src: "/video11.mp4", type: '9:16' },
  ];

  const handleToggleMute = (videoId: number) => {
    if (activeVideoId === videoId) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(videoId);
    }
  };

  return (
    <Box position="relative" px={4} py={2}>
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 4 }} 
        spacing={6} 
        alignItems="start"
      >
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            isActive={activeVideoId === video.id}
            onToggleMute={() => handleToggleMute(video.id)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VideoGrid;
