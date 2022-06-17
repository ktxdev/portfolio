import React from 'react'

const MenuItems = ({ onShowMenu, showMenu }) => {
    return (
        <div className={showMenu ? 'xl:hidden lg:px-40 absolute w-full h-screen inset-0 bg-gray-800 py-8 px-6 font-roboto' : 'hidden'}>
            <div className=' flex flex-col items-center text-white' >
                <a className="self-end" onClick={onShowMenu}>
                    <svg className="cursor-pointer h-5 w-5" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 491 491">
                        <g clip-path="url(#clip0_60_52)">
                            <path className="fill-gray-50" fill="#000" d="M435.325 490.127l54.729-54.729L54.768.111.039 54.84l435.286 435.287zM176.276 259.17L-.003 435.449l54.73 54.729 176.278-176.279-54.729-54.729zM314.014 231.43L490.292 55.151 435.564.423 259.285 176.7l54.729 54.729z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_60_52">
                                <path fill="#fff" d="M0 0h490.29v490.29H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a className="cursor-pointer mt-16 p-4 hover:text-red-500">Home</a>
                <a className="cursor-pointer p-4 hover:text-red-500">Projects</a>
                <a className="cursor-pointer p-4 hover:text-red-500">Exprience &amp; Skills</a>
                <a className="cursor-pointer p-4 hover:text-red-500">Contact</a>
                <a className="cursor-pointer py-2 my-2 border-red-500 border-2 rounded-full px-10 hover:bg-red-500 hover:text-gray-50">Resume</a>
                <div className="flex space-x-6 p-4">
                    {/* Linkedin Logo */}
                    <a href="https://www.linkedin.com/in/sean-huvaya-bba3171b9/" target="_blank">
                        <svg className="cursor-pointer group" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 36 36">
                            <path className="fill-gray-50 group-hover:fill-red-500" fill="#000" d="M26.451.889H9.021C4.19.889.25 4.83.25 9.659v17.46c0 4.8 3.941 8.742 8.77 8.742h17.46c4.829 0 8.77-3.941 8.77-8.77V9.66C35.222 4.83 31.28.889 26.451.889zm-14.544 28.31H6.911V14.768h4.996V29.2zM9.382 12.547a2.547 2.547 0 01-2.554-2.553 2.547 2.547 0 012.554-2.554 2.547 2.547 0 012.553 2.554c-.028 1.415-1.166 2.553-2.553 2.553zM28.589 29.2h-4.191v-6.995c0-1.693-.223-3.858-2.526-3.858-2.36 0-2.748 1.832-2.748 3.747V29.2H14.96V14.767h3.885v1.943h.111c.611-1.11 2.026-1.971 4.247-1.971 4.58 0 5.385 2.637 5.385 6.55v7.91z" />
                        </svg>
                    </a>
                    {/* GitHub Logo */}
                    <a href="https://github.com/ktxdev" target="_blank">
                        <svg className="cursor-pointer group" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 35 35">
                            <path className="fill-gray-50 group-hover:fill-red-500" fill="#000" d="M17.221.7h.13c3.14 0 6.077.858 8.592 2.352l-.077-.043c2.62 1.531 4.74 3.652 6.229 6.19l.043.082c1.456 2.476 2.316 5.454 2.316 8.632 0 7.568-4.876 14-11.658 16.321l-.122.037a1.014 1.014 0 01-.899-.158h.003a.874.874 0 01-.29-.652v-.02.002l.01-1.716c.008-1.1.012-2.105.012-3.016a3.981 3.981 0 00-1.166-3.184 15.285 15.285 0 002.405-.426l-.107.023a9.112 9.112 0 002.152-.898l-.043.023a6.327 6.327 0 001.808-1.48l.009-.01a6.86 6.86 0 001.176-2.304l.012-.049c.293-.956.461-2.055.461-3.193l-.001-.19v.01l.001-.101a6.622 6.622 0 00-1.777-4.522l.005.004a5.85 5.85 0 00.37-2.07 5.95 5.95 0 00-.565-2.54l.015.036a2.933 2.933 0 00-1.834.253l.017-.007a12.07 12.07 0 00-2.117 1.017l.054-.031-.853.538a15.842 15.842 0 00-4.305-.583c-1.532 0-3.014.213-4.42.61l.114-.027a20.126 20.126 0 00-.954-.607c-.522-.3-1.14-.589-1.78-.833l-.093-.03a3.043 3.043 0 00-1.413-.342c-.173 0-.344.014-.51.042l.019-.003a5.88 5.88 0 00-.55 2.503c0 .744.136 1.456.385 2.113l-.014-.04a6.613 6.613 0 00-1.771 4.624v-.006c-.002.055-.002.118-.002.182 0 1.133.168 2.227.482 3.258l-.021-.08a7.23 7.23 0 001.19 2.37l-.013-.018A6.09 6.09 0 009.65 24.23l.031.015a8.914 8.914 0 002.044.86l.064.015c.653.175 1.434.318 2.233.398l.065.005c-.604.6-1.005 1.4-1.098 2.294l-.001.016c-.29.142-.627.257-.979.33l-.03.006a6.192 6.192 0 01-1.19.112h-.092.005a2.635 2.635 0 01-1.477-.487l.008.006A3.977 3.977 0 018 26.42l-.01-.022a3.645 3.645 0 00-1.075-1.157l-.013-.009a3.264 3.264 0 00-1.086-.532l-.023-.005-.448-.068a1.467 1.467 0 00-.66.104l.01-.004c-.119.067-.156.153-.111.257.054.12.121.224.203.315l-.002-.001c.086.1.182.189.287.266l.004.003.157.112c.396.207.723.495.97.844l.006.008c.267.332.503.707.692 1.11l.014.033.224.515c.189.563.532 1.033.98 1.373l.007.006c.42.328.926.563 1.48.67l.022.002c.462.09 1 .146 1.548.157h.01c.063.003.136.003.21.003.365 0 .724-.03 1.074-.087l-.038.005.515-.09c0 .57.004 1.23.011 1.986l.012 1.222v.02a.874.874 0 01-.292.652h-.001a1.004 1.004 0 01-.903.156l.007.001C4.881 31.9.008 25.469.008 17.899c0-3.175.857-6.15 2.354-8.707l-.045.082c1.532-2.62 3.653-4.74 6.19-6.229l.082-.043C11.024 1.554 13.958.699 17.091.699h.137-.007V.7zM6.525 25.432c.045-.104-.007-.194-.156-.268-.15-.045-.247-.03-.292.044-.044.105.008.195.157.27.135.089.232.074.291-.046zm.696.763c.105-.074.09-.194-.045-.358-.149-.134-.268-.157-.358-.067-.105.075-.09.194.045.358.148.147.268.169.358.066v.001zm.672 1.008c.135-.104.135-.246 0-.425-.12-.194-.246-.24-.38-.135-.135.075-.135.21 0 .404.134.194.26.246.38.156zm.941.943c.12-.12.09-.262-.09-.426-.179-.18-.328-.202-.448-.067-.134.12-.104.261.09.425.18.18.329.2.448.062v.006zm1.278.56c.045-.165-.052-.284-.291-.359-.224-.06-.366-.007-.426.157s.038.276.292.336c.224.09.366.046.425-.134zm1.413.112c0-.195-.127-.277-.381-.247-.239 0-.358.082-.358.247 0 .194.127.276.38.246.24 0 .359-.08.359-.245v-.001zm1.3-.224c-.03-.165-.164-.232-.403-.202-.239.045-.343.157-.313.336.03.18.164.239.403.18.239-.06.344-.165.315-.314h-.002z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default MenuItems