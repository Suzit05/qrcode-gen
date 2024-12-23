import React, { useRef, useState } from 'react'
import QRCode from 'react-qr-code';

const Home = () => {

    const urlref = useRef();
    const [isUrl, setisUrl] = useState(true)
    const [url, seturl] = useState("");
    const [qrcodeurl, setqrcodeurl] = useState("")


    const GenerateHandler = () => {
        const urlLink = urlref.current.value;

        if (urlLink == "") {
            alert("Enter the url")
            setisUrl(false)
        }
        else {
            setisUrl(true)
            seturl(urlLink)
          
        }
    }

    const DownloadHandler = () => {

        //with the help of chatgpt bcoz qr is in svg format
        const svg = document.querySelector("svg"); // Select the QR code SVG
        if (svg) {
            const svgData = new XMLSerializer().serializeToString(svg); // Serialize SVG to string
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const image = new Image();

            // Set canvas dimensions to match the SVG size
            canvas.width = svg.getBoundingClientRect().width;
            canvas.height = svg.getBoundingClientRect().height;

            // Convert SVG to Base64 URL and draw it on the canvas
            const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            image.onload = () => {
                ctx.drawImage(image, 0, 0);
                URL.revokeObjectURL(url);

                // Convert canvas to image URL
                const imageUrl = canvas.toDataURL("image/png");
                setqrcodeurl(imageUrl); // Save the image URL in state
            };
            image.src = url;
        } else {
            console.error("SVG not found");
        }
    }


    const ClearHandler = () => {
        seturl("");
        urlref.current.value = "";

    }


    return (
        <div className='w-full h-[140vh] flex flex-col   justify-center items-center  text-purple-400 bg-zinc-900'>
            <div className='flex flex-col mt-[2vh] justify-center items-center'>
                <h1 className='text-[5vh] font-bold'>QR Code Generator - Create QR Codes for Free</h1>
                <p>Free online static and dynamic QR Code generator for any use case. <br />
                    Create free QR Codes in three simple steps. <br />
                    Make a QR Code, customize it, and track it with a free forever plan.</p>
            </div>
            <div className='flex gap-[12vw] items-center mt-[23vh] '>
                <div><input ref={urlref} required className='w-[40vw] p-1 border-b-2 border-black' c type="url" name="" id="" placeholder='Enter url' />
                    <button onClick={GenerateHandler} className='p-1 bg-purple-600 text-white rounded-md ml-3'>Generate</button></div>
                <div className='flex flex-col'>
                    {url && <div className="bg-purple-300 w-[20vw] h-[42vh]  p-1">
                        <QRCode
                            title="Your link qr"
                            value={url}
                            bgColor={"white"}
                            fgcolor={"red"}
                            size={300}
                        /></div>}
                    {url && <div className='flex flex-col'>
                        <button onClick={DownloadHandler} className='p-1 bg-purple-600 text-white rounded-md mt-4 '>Prepare Download</button>
                        <button onClick={ClearHandler} className='p-1 bg-purple-600 text-white rounded-md mt-4 '>Clear</button></div>}
                    {qrcodeurl && (<a className='p-1 bg-green-600 self-center text-white rounded-md mt-4 ' download="qrcode.jpeg" href={qrcodeurl}> Download</a>)}

                </div>
            </div>
            {isUrl == false && <h4 className='text-red-500 absolute bottom-[20vh] left-[11vw]'>Enter the valid url</h4>}

        </div >
    )
}

export default Home