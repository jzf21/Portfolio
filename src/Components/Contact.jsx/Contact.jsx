import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center p-peach bgblack min-h-[100vh] leading-10 gap-10">
      <h2 className="text-4xl md:text-7xl p-peach text-center">
        Want to Connect?
        <br />
        Say Hi!
      </h2>
      {/* <h2 className="text-7xl p-peach">Say Hi!</h2> */}
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jozefantonyneelamkavil.mec@gmail.com&su=Iwouldliketoconnect&body=BODY">
        <button className=" font-bold text-2xl md:text-3xl rounded-none bg-yellow ">
          START A CONVERSATION
        </button>
      </a>
      <div className="flex flex-row gap-4 "></div>
    </div>
  );
}

export default Contact