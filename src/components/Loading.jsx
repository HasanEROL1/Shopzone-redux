import React from 'react'

const Loading = () => {
    return (
     <div className="h-screen flex flex-col items-center justify-center gap-5">
         <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full "></div>
       <h1 className="text-lg font-semibold animate-pulse mt-20">Yükleniyor...</h1>
    </div>
   
    )
}

export default Loading