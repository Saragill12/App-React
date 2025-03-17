// // import React, { useState } from 'react';
// // import Data from '../Data/Data.json';

// // const Header = () => {
// // const [step, setStep] = useState(null); // Initially null so nothing is displayed
// // const [color, setColor] = useState('purple'); 

// // const handleClick = () => {
// // setStep((prev) => (prev === null ? 0 : prev < Data.length - 1 ? prev + 1 : 0));
// //         // setColor((prevColor) => (prevColor === 'purple' ? 'red' : 'blue' ? 'black'));
// // if (color === 'purple') {
// // setColor('red');
// // } else if (color === 'red') {
// //  setColor('blue');
// // } else {
// // setColor('purple');
// // }
// // };

// //     return (
// //         <div>
// // <div style={{color:'black',fontSize:35,marginLeft:550}}>  Rating App</div>

// // {step !== null && <h1 style={{ color }}>{Data[step]?.text}</h1>}
// // <button onClick={handleClick}>Click</button>
// // </div>
// // );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import Data from '../Data/Data.json';

// const Header = () => {
//     const [step, setStep] = useState(null);
//     const [color, setColor] = useState('purple');

//     const handleClick = () => {
//         setStep((prev) => (prev === null ? 0 : prev < Data.length - 1 ? prev + 1 : 0));

//         setColor((prevColor) => {
//             if (prevColor === 'purple') return 'red';
//             if (prevColor === 'red') return 'blue';
//             return 'purple';
//         });
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>Rating App</h1>
//             {step !== null && <h2 style={{ ...styles.text, color }}>{Data[step]?.text}</h2>}
//             <button style={styles.button} onClick={handleClick}> Click </button>  
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: '#f4f4f4',
//         fontFamily: 'Arial, sans-serif',
//     },
//     title: {
//         fontSize: '2rem',
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: '20px',
//     },
//     text: {
//         fontSize: '1.5rem',
//         marginBottom: '20px',
//         transition: 'color 0.3s ease-in-out',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '1rem',
//         color: '#fff',
//         backgroundColor: '#007bff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//     },
//     buttonHover: {
//         backgroundColor: '#0056b3',su
//     },
// };

// export default Header;
import React from "react";

const Header = ({ text }) => {
  return (
    <header style={{ backgroundColor: "#007bff", color: "white", padding: "10px", textAlign: "center" }}>
      <h1>{text}</h1>
    </header>
  );
};

export default Header;