import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const name = 'john';
// //const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(element, document.getElementById('root'));

// function getName(mahasiswa){
//     return mahasiswa.nama+ ' ' +mahasiswa.nim;
// }
// function getGreeting(mahasiswa){
//     if(mahasiswa.angkatan=2018) {
//         return <h1>selamat datang</h1>;
//     } else {
//         return ".....";
//     }
   
// }
// const mahasiswa = {
//    nama : "Budi",
//    nim : '1234',
//    angkatan : 2018
// };
// const element = (
//     <h1>Mahasiswa, {formatName(mahasiswa)}!</h1>
// );

// ReactDOM.render(
//     element, document.getElementById('root')
// );


function tick() {
    const element = (
        <div>
            <h1>Hello</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
