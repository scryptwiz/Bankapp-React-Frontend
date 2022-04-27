//   const locate = () =>{
//     if(name) {
//         if (location=='Dashboard') {
    //             <h4>
    //                 <span className='text-gray-600 text-sm'>Hello</span>
    //                 <br />
    //                 <span className='font-medium text-xl text-gray-800 captalize'>{name}</span>
    //             </h4>
//         } else if (location=='edit') {
//             <h4>
//                 <span className='text-gray-600 text-sm'>Edit</span>
//                 <br />
//                 <span className='font-medium text-xl text-gray-800 captalize'>Profile</span>
//             </h4>
//         } 
//     } else { 
//         <h4> </h4>
//     }
//   }
const locate = () => {
    if(name) {
        <h4>
            <span className='text-gray-600 text-sm'>Hello</span>
            <br />
            <span className='font-medium text-xl text-gray-800 captalize'>{name}</span>
        </h4>
    } else {
        <h4> </h4>
    }
}

