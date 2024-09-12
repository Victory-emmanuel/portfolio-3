// const ProfileImage = () => {
//   return (
//     <div className="ml-12 md:block xx:hidden">
//       <div className=" ">
//         <div
//           style={{
//             background: `url("https://i.postimg.cc/LsrJQNzj/2148190718.jpg") no-repeat center center/cover`,
//           }}
//           className=" w-[30rem] h-[100%]"
//         ></div>
//         {/* <img
//           src="https://i.postimg.cc/LsrJQNzj/2148190718.jpg"
//           className=""
//           alt="profile"
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default ProfileImage;
const ProfileImage = () => {
  return (
    <>
      {/* Desktop Mode */}
      <div className="ml-12 md:block xx:hidden">
        <div>
          <div
            style={{
              background: `url("https://i.postimg.cc/LsrJQNzj/2148190718.jpg") no-repeat center center/cover`,
            }}
            className="w-[35rem] h-[84vh]" // Set a fixed height here
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
