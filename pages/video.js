const VideoPage = ({ }) => {

    return (
        <div className="flex justify-center items-center flex-col gap-2">
            <h1 className="text-center text-3xl mt-12 text-blue-800 font-bold font-['Open_Sans']">Sonet Video Player</h1>
            <video src="/assets/sample_sm.mp4" className="h-96 aspect-video border-2 rounded-lg object-cover" controls></video>
            <div className="flex justify-center items-center flex-row ">
            <img
                className="h-48 aspect-video object-cover p-1"
                src="https://images.unsplash.com/photo-1652662946272-5426d1cd6f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="image"
                
            />
            <img
                className="h-48 aspect-video object-cover p-1"
                src="https://images.unsplash.com/photo-1607699330031-b8552f3ce4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                alt="image"
                />
                </div>
        </div>
    )
}

export default VideoPage;

