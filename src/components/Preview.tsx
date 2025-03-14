import { useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { Play } from "lucide-react";

export default function Preview() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            See PingProspect in Action
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Watch how easy it is to automate your Facebook outreach
          </p>
        </div>

        <div className="mt-12">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            {videoPlaying ? (
              <ReactPlayer
                url="https://vimeo.com/1061813992"
                playing={true}
                controls={false}  // Hide default Vimeo controls
                width="100%"
                height="100%"
                // Configure Vimeo to hide extra info (title, byline, portrait).
                config={{
                  vimeo: {
                    playerOptions: {
                      title: false,
                      byline: false,
                      portrait: false,
                    },
                  },
                }}
              />
            ) : (
              <>
                {/* Thumbnail Image */}
                <img
                  src="PingProspect Thumbnail.png"
                  alt="PingProspect Interface"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
