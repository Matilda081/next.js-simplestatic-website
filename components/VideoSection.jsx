export default function VideoSection() {
  return (
    <div className="flex justify-center -mt-16 md:-mt-24 z-10 relative">
      <div className="w-[90%] md:w-[70%] max-w-5xl rounded-xl 0verflow-hidden shadow-2xl">
        <video controls poster="/imageJ/video-photo1.jpeg" className="w-full">
          <source src="/imageJ/simply-static-video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}