const frameworks = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 30 30">
            <path fill="#6DB33F" d="M4.564 4.212c5.927-5.752 15.404-5.598 21.146.372a12.738 12.738 0 0 0 1.606-2.815c1.883 5.753 3.025 10.578 2.593 14.32a14.96 14.96 0 0 1-3.489 8.599c-5.31 6.31-14.756 7.114-21.054 1.794l-.12-.108-.007-.004a1.217 1.217 0 0 1-.215-.189l-.016-.019-.197-.175a6.237 6.237 0 0 1-.555-.517l-.063-.07c-5.742-5.94-5.557-15.435.37-21.188Zm2.222 20.136c-.555-.433-1.358-.372-1.79.185-.38.49-.378 1.17.005 1.622l.007.007.238.212.023.016c.54.356 1.266.282 1.68-.22l.023-.029c.432-.556.34-1.36-.186-1.793ZM27.161 3.316c-1.543 3.247-5.371 5.721-8.675 6.495-3.118.742-5.834.123-8.705 1.237-6.545 2.505-6.421 10.3-2.84 12.062l.216.124s2.587-.515 5.144-1.196l.22-.058c1.021-.276 2.026-.577 2.847-.88 4.26-1.578 8.953-5.475 10.497-9.99-.803 4.701-4.847 9.248-8.891 11.32-2.161 1.113-3.828 1.36-7.378 2.598-.433.155-.772.31-.772.31.043-.007.087-.013.13-.018l.086-.012.086-.01c.784-.098 1.488-.146 1.488-.146 5.032-.248 12.935 1.422 16.609-3.495 3.766-5.01 1.667-13.114-.062-18.341Z" />
            <path fill="#fff" d="M6.786 24.347c.525.433.618 1.238.186 1.794-.433.557-1.235.619-1.79.186-.557-.433-.618-1.237-.186-1.794.432-.557 1.235-.619 1.79-.186ZM27.161 3.315c1.729 5.227 3.828 13.331.062 18.341-3.674 4.918-11.577 3.248-16.609 3.496 0 0-.704.048-1.488.146l-.086.01-.216.03s.34-.155.772-.31c3.55-1.237 5.217-1.485 7.378-2.598 4.044-2.072 8.088-6.62 8.89-11.32-1.543 4.515-6.235 8.412-10.496 9.99-2.932 1.082-8.211 2.134-8.211 2.134l-.216-.124c-3.581-1.763-3.705-9.557 2.84-12.062 2.87-1.114 5.587-.495 8.705-1.237 3.304-.774 7.132-3.248 8.675-6.496Z" />
        </svg>,
        title: 'Spring Framework'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 30 30">
            <path fill="#00D8FF" d="M24.666 9.724c-.311-.12-.634-.235-.966-.342.055-.25.105-.498.15-.74.73-3.99.252-7.202-1.38-8.26-1.565-1.015-4.124.043-6.71 2.572-.248.243-.497.5-.746.77a19.308 19.308 0 0 0-.497-.516C11.807.504 9.092-.635 7.462.426 5.898 1.443 5.435 4.464 6.093 8.244c.064.365.138.738.222 1.117-.384.122-.755.253-1.11.392C2.028 10.998 0 12.948 0 14.972c0 2.09 2.178 4.185 5.486 5.456.26.1.532.195.81.285-.09.41-.169.812-.235 1.204-.627 3.714-.137 6.663 1.422 7.674 1.61 1.044 4.314-.029 6.946-2.615.208-.204.417-.421.626-.648.271.293.542.57.811.831 2.55 2.466 5.068 3.462 6.626 2.448 1.61-1.047 2.132-4.215 1.453-8.07a21.166 21.166 0 0 0-.18-.9c.19-.064.376-.129.558-.197C27.763 19.16 30 17.09 30 14.972c0-2.031-2.094-3.995-5.334-5.248Zm-.746 9.35c-.164.06-.332.12-.504.176a36.355 36.355 0 0 0-1.519-4.271 36.416 36.416 0 0 0 1.46-4.21c.307.1.605.206.892.317 2.776 1.074 4.47 2.662 4.47 3.886 0 1.303-1.83 2.995-4.799 4.101Zm-1.232 2.743c.3 1.705.343 3.246.144 4.45-.178 1.083-.538 1.805-.982 2.094-.946.615-2.967-.185-5.148-2.294-.25-.241-.502-.5-.754-.773a33.544 33.544 0 0 0 2.514-3.588 26.87 26.87 0 0 0 4.064-.704c.06.277.115.55.162.815Zm-12.46 6.438c-.924.366-1.66.377-2.104.088-.947-.613-1.34-2.981-.804-6.157.062-.364.135-.738.22-1.12 1.228.306 2.589.525 4.042.658.83 1.313 1.7 2.52 2.576 3.576a16.79 16.79 0 0 1-.572.591c-1.164 1.144-2.33 1.955-3.358 2.364ZM5.9 19.065c-1.463-.562-2.67-1.292-3.499-2.09-.744-.715-1.12-1.426-1.12-2.003 0-1.228 1.63-2.794 4.345-3.859.33-.129.675-.25 1.033-.365a37.239 37.239 0 0 0 1.462 4.259 37.863 37.863 0 0 0-1.48 4.319c-.256-.083-.503-.17-.74-.26ZM7.35 7.967c-.563-3.238-.189-5.681.754-6.294 1.003-.654 3.223.278 5.562 2.612.15.15.3.305.45.467a34.072 34.072 0 0 0-2.556 3.555 28.19 28.19 0 0 0-4.003.699 23.5 23.5 0 0 1-.206-1.039Zm12.941 3.592a47.217 47.217 0 0 0-.912-1.687c.957.136 1.874.317 2.736.538a33.543 33.543 0 0 1-.96 2.903 53.51 53.51 0 0 0-.864-1.755ZM15.014 5.78c.591.72 1.183 1.524 1.766 2.396a33.587 33.587 0 0 0-3.546-.001 31.197 31.197 0 0 1 1.78-2.395Zm-5.31 5.788a44.43 44.43 0 0 0-.848 1.743 34.42 34.42 0 0 1-.953-2.918 26.01 26.01 0 0 1 2.72-.524 43.62 43.62 0 0 0-.92 1.698Zm.946 8.607a24.302 24.302 0 0 1-2.764-.5c.264-.96.59-1.96.972-2.976a43.847 43.847 0 0 0 1.792 3.476Zm4.4 4.087a31.746 31.746 0 0 1-1.805-2.428c.574.026 1.16.039 1.755.039.611 0 1.216-.016 1.81-.046a30.248 30.248 0 0 1-1.76 2.435Zm6.117-7.615a32.98 32.98 0 0 1 1.007 2.966 24.51 24.51 0 0 1-2.798.536c.311-.554.618-1.127.92-1.715.306-.596.596-1.192.87-1.787Zm-1.98 1.067c-.47.914-.95 1.786-1.44 2.61-.89.071-1.81.108-2.747.108a37.26 37.26 0 0 1-2.716-.096 42.402 42.402 0 0 1-2.746-5.33 42.81 42.81 0 0 1 1.276-2.72v.001a41.57 41.57 0 0 1 1.454-2.603 32.098 32.098 0 0 1 5.469.001c.496.823.98 1.691 1.445 2.594.47.914.903 1.818 1.294 2.706-.39.902-.821 1.816-1.29 2.729ZM21.83 1.63c1.005.65 1.396 3.277.764 6.72-.04.22-.085.444-.135.67a27.587 27.587 0 0 0-4.01-.711 33.483 33.483 0 0 0-2.537-3.558c.23-.249.461-.487.69-.71 2.215-2.167 4.285-3.023 5.228-2.411ZM15 11.96c1.48 0 2.679 1.349 2.679 3.012 0 1.662-1.2 3.01-2.679 3.01-1.48 0-2.679-1.348-2.679-3.01 0-1.663 1.2-3.011 2.679-3.011Z" />
        </svg>,
        title: 'ReactJS'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 30 30">
            <path fill="#A6D864" d="M18.75 30c1.201 0 2.249-.875 2.249-1.878v-4.386H22.5c.901 0 1.502-.501 1.502-1.253V9.957H5.997v12.526c0 .752.601 1.253 1.502 1.253h1.502v4.386c0 1.003 1.047 1.878 2.248 1.878 1.201 0 2.248-.875 2.248-1.878v-4.386h3.004v4.386c0 1.003 1.047 1.878 2.248 1.878Zm9.002-7.517c1.2 0 2.248-.875 2.248-1.878v-8.771c0-.998-1.047-1.877-2.248-1.877-1.202 0-2.249.88-2.249 1.877v8.77c0 1.004 1.047 1.879 2.249 1.879Zm-25.504 0c1.202 0 2.249-.875 2.249-1.878v-8.771c0-.998-1.047-1.877-2.249-1.877-1.2 0-2.248.88-2.248 1.877v8.77c0 1.004 1.047 1.879 2.248 1.879ZM22.2.19a.82.82 0 0 0-1.048 0L19.14 1.864l-.093.078c-1.194-.5-2.533-.749-4.024-.751h-.044c-1.49.002-2.83.251-4.024.75l-.093-.077L8.848.19A.82.82 0 0 0 7.8.19c-.3.251-.3.623 0 .874L9.748 2.69a7.815 7.815 0 0 0-1.691 1.268c-1.185 1.173-1.941 2.7-2.045 4.354l-.004.051a5.49 5.49 0 0 0-.01.34h18.004a6.28 6.28 0 0 0-.01-.34c0-.017-.003-.034-.004-.051-.104-1.654-.86-3.181-2.045-4.354a7.809 7.809 0 0 0-1.692-1.268L22.2 1.063c.3-.25.3-.623 0-.874ZM11.247 6.512c-.62 0-1.125-.42-1.125-.94 0-.518.504-.938 1.125-.938s1.125.42 1.125.939c0 .519-.504.94-1.125.94Zm7.506 0c-.622 0-1.125-.42-1.125-.94 0-.518.503-.938 1.125-.938.62 0 1.125.42 1.125.939 0 .519-.504.94-1.125.94Z" />
        </svg>,
        title: 'Android'
    }
]

export default frameworks