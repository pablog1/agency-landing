import { VideoPlayer } from '../components/videoplayer';

const VideoWithText = () => {
  return (
    <section className="relative c-container pt-12 pb-4">
      <div className="flex flex-row justify-evenly relative text-black py-5">
        <div>
          <VideoPlayer youtubeUrl="https://www.youtube.com/embed/MPxVAkRgXfo" />
        </div>
        <div className="md:pl-8">
          <h3 className="h2 mb-4">Customized Ecommerce services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            euismod ex. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Suspendisse posuere pulvinar libero, vitae placerat nulla
            vestibulum ac. Phasellus pretium et orci eu tristique. Maecenas elit
            nisi, feugiat a consectetur quis, faucibus sit amet eros. Proin sit
            amet venenatis dolor, non tincidunt dui. Vestibulum vulputate odio
            sit amet accumsan consequat. Phasellus ipsum urna, laoreet ut sapien
            a, ultrices posuere magna. Nunc vitae libero in felis pulvinar
            facilisis a id lorem. Integer in nisl libero.
          </p>
        </div>
      </div>
    </section>
  );
};

export { VideoWithText };
