import { vigenereCipher,vigenereDecipher,playFairCipher,playFairDecipher,affineCipher, affineDecipher,caesarDecipher ,caesarCipher, Atbash, ROT13 } from './EncryptionFunctions';
import './App.css';
import { useState } from 'react';



function App() {
  const [input1, setInput1] = useState("abcde");
  const [input2, setInput2] = useState("CDEFG");
  const [input3, setInput3] = useState("abcde");
  const [input4, setInput4] = useState("abcde");
  const [input5, setInput5] = useState("warlost");
  const [input6, setInput6] = useState("IKZJEGN");
  const [input7, setInput7] = useState("xyzc");
  const [input8, setInput8] = useState("XZBF");
  const [input9, setInput9] = useState("abzy");
  const [input10, setInput10] = useState("abzy");

  const [key1, setKey1] = useState("2");
  const [key2, setKey2] = useState("2");
  const [key5, setKey5] = useState("10");
  const [key6, setKey6] = useState("10");
  const [key7, setKey7] = useState("abcd");
  const [key8, setKey8] = useState("abcd");
  const [key9, setKey9] = useState("");
  const [key10, setKey10] = useState("");

  const [mul1, setMul1] = useState("7");
  const [mul2, setMul2] = useState("7");
  return (
    <div className="">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Label</th>
            <th scope="col">Input</th>
            <th scope="col">key</th>
            <th scope="col">output</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Caesar cipher</th>
            <td><input
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td><input
                    value={key1}
                    onChange={(e) => setKey1(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{caesarCipher(input1, parseInt(key1))}</td>
          </tr>
          <tr>
            <th scope="row">Caesar decipher</th>
            <td><input
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter cipher text"/>
            </td>
            <td><input
                    value={key2}
                    onChange={(e) => setKey2(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{caesarDecipher(input2, parseInt(key2))}</td>
          </tr>
          <tr>
            <th scope="row">ROT13</th>
            <td><input
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td></td>
            <td>{ROT13(input3)}</td>
          </tr>
          <tr>
            <th scope="row">Atbash</th>
            <td><input
                    value={input4}
                    onChange={(e) => setInput4(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td></td>
            <td>{Atbash(input4)}</td>
          </tr>
          <tr>
            <th scope="row">affine cipher</th>
            <td><input
                    value={input5}
                    onChange={(e) => setInput5(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td>
              <div className="d-flex">
                  <input
                    value={key5}
                    onChange={(e) => setKey5(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
                  <input
                    value={mul1}
                    onChange={(e) => setMul1(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter m"/>
              </div>
            </td>
            <td>{affineCipher(input5,parseInt(mul1),parseInt(key5))}</td>
          </tr>
          <tr>
            <th scope="row">affine decipher</th>
            <td><input
                    value={input6}
                    onChange={(e) => setInput6(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter cipher text"/>
            </td>
            <td>
              <div className="d-flex">
                  <input
                    value={key6}
                    onChange={(e) => setKey6(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
                  <input
                    value={mul2}
                    onChange={(e) => setMul2(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter m"/>
              </div>
            </td>
            <td>{affineDecipher(input6,parseInt(mul2),parseInt(key6))}</td>
          </tr>
          <tr>
            <th scope="row">vigenere cipher</th>
            <td><input
                    value={input7}
                    onChange={(e) => setInput7(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td><input
                    value={key7}
                    onChange={(e) => setKey7(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{vigenereCipher(input7,key7)}</td>
          </tr>
          <tr>
            <th scope="row">vigenere decipher</th>
            <td><input
                    value={input8}
                    onChange={(e) => setInput8(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter cipher text"/>
            </td>
            <td><input
                    value={key8}
                    onChange={(e) => setKey8(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{vigenereDecipher(input8,key8)}</td>
          </tr>
          <tr>
            <th scope="row">play fair cipher</th>
            <td><input
                    value={input9}
                    onChange={(e) => setInput9(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter plaintext"/>
            </td>
            <td><input
                    value={key9}
                    onChange={(e) => setKey9(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{playFairCipher(input9,key9)}</td>
          </tr>
          <tr>
            <th scope="row">play fair decipher</th>
            <td><input
                    value={input10}
                    onChange={(e) => setInput10(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter cipher text"/>
            </td>
            <td><input
                    value={key10}
                    onChange={(e) => setKey10(e.target.value)}
                    className="form-control border border-dark border-2"
                    type="text"
                    placeholder="enter the key"/>
            </td>
            <td>{playFairDecipher(input10,key10)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App

