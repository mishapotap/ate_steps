import React, { Fragment, useMemo } from 'react'

export const Turbine = (props) => {
    const {isActive, step} = props
    const isHighlighted = useMemo(() => {
        return step === 'a0'
        // || step === 'a1'
        || step === 'v0'
        // || step === 'g0'
        || step === 'g1'
        || step === 'g2';
    }, [step]);

    return (
        <Fragment>
            <rect x="131" y="100" width="1658.25" height="737" fill="url(#pattern6)"
                style={{opacity: (isHighlighted && isActive) || !isHighlighted ? 0 : 1}}
            />


            {/* Шаг G2 */}
            <svg x="803" y="240" width="435" height="142" viewBox="0 0 435 142" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: (isHighlighted) && (step === 'g2') ? 1 : 0}}>
                <circle cx="7" cy="138" r="4" fill="white"/>
                <path d="M5.99997 139L89.1443 18.0001" stroke="#263973"/>
            </svg>

            {/* Шаг G1 */}
            <svg x="803" y="240" width="435" height="142" viewBox="0 0 435 142" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: (isHighlighted) && (step === 'g1') ? 1 : 0}}>
                <circle cx="7" cy="138" r="4" fill="white"/>
                <path d="M5.99997 139L89.1443 18.0001" stroke="#263973"/>
            </svg>

            {/* Шаг V0 */}
            <svg x="803" y="240" width="435" height="142" viewBox="0 0 435 142" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: (isHighlighted) && (step === 'v0') ? 1 : 0}}>
                <circle cx="7" cy="138" r="4" fill="white"/>
                <path d="M5.99997 139L89.1443 18.0001" stroke="#263973"/>
            </svg>


            {/* Все кроме G2 */}
            <circle cx="812" cy="375" r="4" fill="white" style={{opacity: (isHighlighted) && (step !== 'g2') && (step !== 'g1') && (step !== 'v0') ? 1 : 0}}/>
            <path d="M811 375L894.144 254" stroke="#263973" style={{opacity: (isHighlighted) && (step !== 'g2') && (step !== 'g1') && (step !== 'v0') ? 1 : 0}}/>
            <path d="M1028.5 253H894.145" stroke="#263973" style={{opacity: (isHighlighted) && (step !== 'g2') && (step !== 'g1') && (step !== 'v0') ? 1 : 0}}/>

            <path style={{opacity: (isHighlighted) && (step !== 'g2') && (step !== 'g1') && (step !== 'v0') ? 1 : 0}} d="M900.423 237.229H899.042V236.251H900.231C900.655 236.251 900.999 236.189 901.264 236.066C901.528 235.939 901.719 235.763 901.838 235.54C901.961 235.312 902.022 235.048 902.022 234.747C902.022 234.478 901.954 234.232 901.817 234.009C901.685 233.785 901.48 233.608 901.202 233.476C900.924 233.339 900.566 233.271 900.129 233.271C899.801 233.271 899.502 233.33 899.233 233.448C898.965 233.567 898.75 233.733 898.591 233.947C898.436 234.161 898.358 234.414 898.358 234.706H896.643C896.643 234.273 896.734 233.886 896.916 233.544C897.103 233.198 897.356 232.904 897.675 232.662C897.998 232.421 898.37 232.236 898.789 232.108C899.213 231.976 899.66 231.91 900.129 231.91C900.676 231.91 901.17 231.972 901.612 232.095C902.054 232.213 902.435 232.391 902.754 232.628C903.073 232.865 903.317 233.161 903.485 233.517C903.654 233.868 903.738 234.275 903.738 234.74C903.738 235.082 903.659 235.403 903.499 235.704C903.344 236.005 903.121 236.269 902.829 236.497C902.537 236.725 902.187 236.905 901.776 237.037C901.371 237.165 900.92 237.229 900.423 237.229ZM899.042 236.634H900.423C900.974 236.634 901.464 236.691 901.893 236.805C902.321 236.919 902.683 237.085 902.979 237.304C903.276 237.522 903.501 237.794 903.656 238.117C903.811 238.436 903.889 238.803 903.889 239.218C903.889 239.683 903.795 240.097 903.608 240.462C903.426 240.822 903.166 241.127 902.829 241.378C902.492 241.629 902.093 241.818 901.633 241.945C901.177 242.073 900.676 242.137 900.129 242.137C899.687 242.137 899.249 242.082 898.816 241.973C898.388 241.859 897.998 241.686 897.647 241.453C897.301 241.216 897.023 240.915 896.813 240.551C896.604 240.186 896.499 239.749 896.499 239.238H898.222C898.222 239.521 898.301 239.781 898.461 240.018C898.625 240.25 898.848 240.437 899.131 240.578C899.418 240.715 899.751 240.783 900.129 240.783C900.562 240.783 900.929 240.715 901.229 240.578C901.535 240.441 901.767 240.255 901.927 240.018C902.091 239.781 902.173 239.514 902.173 239.218C902.173 238.935 902.13 238.691 902.043 238.486C901.961 238.277 901.838 238.108 901.674 237.98C901.51 237.848 901.307 237.75 901.065 237.687C900.824 237.623 900.546 237.591 900.231 237.591H899.042V236.634ZM908.091 234.604H909.739L909.657 237.208C909.634 237.965 909.547 238.614 909.397 239.156C909.247 239.699 909.051 240.157 908.809 240.53C908.568 240.899 908.294 241.202 907.989 241.439C907.688 241.676 907.371 241.863 907.039 242H906.553V240.701L906.786 240.688C906.982 240.478 907.15 240.268 907.292 240.059C907.437 239.844 907.56 239.61 907.661 239.354C907.761 239.095 907.838 238.792 907.893 238.445C907.952 238.099 907.991 237.687 908.009 237.208L908.091 234.604ZM908.529 234.604H913.218V242H911.578V235.998H908.529V234.604ZM906.177 240.688H914.23V244.201H912.583V242H907.845V244.201H906.171L906.177 240.688ZM920.976 240.517V236.989C920.976 236.725 920.928 236.497 920.832 236.306C920.737 236.114 920.591 235.966 920.395 235.861C920.203 235.757 919.962 235.704 919.67 235.704C919.401 235.704 919.169 235.75 918.973 235.841C918.777 235.932 918.624 236.055 918.515 236.21C918.405 236.365 918.351 236.54 918.351 236.736H916.71C916.71 236.445 916.781 236.162 916.922 235.889C917.063 235.615 917.268 235.371 917.537 235.157C917.806 234.943 918.127 234.774 918.501 234.651C918.875 234.528 919.294 234.467 919.759 234.467C920.315 234.467 920.807 234.56 921.236 234.747C921.668 234.934 922.008 235.216 922.254 235.595C922.505 235.968 922.63 236.438 922.63 237.003V240.291C922.63 240.628 922.653 240.931 922.698 241.2C922.749 241.465 922.819 241.695 922.91 241.891V242H921.222C921.144 241.822 921.083 241.597 921.037 241.323C920.996 241.045 920.976 240.776 920.976 240.517ZM921.215 237.502L921.229 238.521H920.046C919.741 238.521 919.472 238.55 919.239 238.609C919.007 238.664 918.813 238.746 918.658 238.855C918.503 238.965 918.387 239.097 918.31 239.252C918.232 239.407 918.194 239.582 918.194 239.778C918.194 239.974 918.239 240.154 918.33 240.318C918.421 240.478 918.554 240.603 918.727 240.694C918.904 240.785 919.119 240.831 919.369 240.831C919.707 240.831 920.001 240.763 920.251 240.626C920.506 240.485 920.707 240.314 920.853 240.113C920.999 239.908 921.076 239.715 921.085 239.532L921.618 240.264C921.564 240.451 921.47 240.651 921.338 240.865C921.206 241.079 921.033 241.285 920.819 241.48C920.609 241.672 920.356 241.829 920.06 241.952C919.768 242.075 919.431 242.137 919.048 242.137C918.565 242.137 918.134 242.041 917.756 241.85C917.378 241.654 917.082 241.392 916.867 241.063C916.653 240.731 916.546 240.355 916.546 239.936C916.546 239.544 916.619 239.197 916.765 238.896C916.915 238.591 917.134 238.336 917.421 238.131C917.713 237.926 918.068 237.771 918.487 237.666C918.907 237.557 919.385 237.502 919.923 237.502H921.215ZM930.804 237.693V238.992H926.976V237.693H930.804ZM927.455 234.604V242H925.807V234.604H927.455ZM931.994 234.604V242H930.346V234.604H931.994ZM936.853 239.594L939.758 234.604H941.406V242H939.758V237.003L936.853 242H935.205V234.604H936.853V239.594ZM947.81 242.137C947.263 242.137 946.768 242.048 946.326 241.87C945.889 241.688 945.515 241.435 945.205 241.111C944.9 240.788 944.665 240.407 944.501 239.97C944.337 239.532 944.255 239.061 944.255 238.555V238.281C944.255 237.702 944.339 237.178 944.508 236.709C944.676 236.24 944.911 235.839 945.212 235.506C945.513 235.169 945.868 234.911 946.278 234.733C946.688 234.556 947.133 234.467 947.611 234.467C948.14 234.467 948.603 234.556 948.999 234.733C949.396 234.911 949.724 235.162 949.983 235.485C950.248 235.804 950.444 236.185 950.571 236.627C950.703 237.069 950.77 237.557 950.77 238.09V238.794H945.055V237.611H949.143V237.481C949.133 237.185 949.074 236.907 948.965 236.647C948.86 236.388 948.698 236.178 948.479 236.019C948.261 235.859 947.969 235.779 947.604 235.779C947.331 235.779 947.087 235.839 946.873 235.957C946.663 236.071 946.488 236.237 946.347 236.456C946.205 236.675 946.096 236.939 946.019 237.249C945.946 237.554 945.909 237.898 945.909 238.281V238.555C945.909 238.878 945.952 239.179 946.039 239.457C946.13 239.73 946.262 239.97 946.436 240.175C946.609 240.38 946.818 240.542 947.064 240.66C947.311 240.774 947.591 240.831 947.905 240.831C948.302 240.831 948.655 240.751 948.965 240.592C949.275 240.432 949.544 240.207 949.771 239.915L950.64 240.756C950.48 240.988 950.273 241.212 950.018 241.426C949.762 241.635 949.45 241.806 949.081 241.938C948.716 242.071 948.293 242.137 947.81 242.137ZM961.773 234.604V242H960.118V234.604H961.773ZM964.199 234.604V235.902H957.733V234.604H964.199ZM968.929 241.193L970.938 234.604H972.702L969.735 243.128C969.667 243.31 969.578 243.508 969.469 243.723C969.359 243.937 969.216 244.14 969.038 244.331C968.865 244.527 968.648 244.684 968.388 244.803C968.129 244.926 967.814 244.987 967.445 244.987C967.299 244.987 967.158 244.974 967.021 244.946C966.889 244.924 966.764 244.898 966.645 244.871L966.638 243.613C966.684 243.618 966.739 243.622 966.803 243.627C966.871 243.632 966.926 243.634 966.967 243.634C967.24 243.634 967.468 243.6 967.65 243.531C967.832 243.467 967.981 243.363 968.095 243.217C968.213 243.071 968.313 242.875 968.395 242.629L968.929 241.193ZM967.794 234.604L969.551 240.141L969.845 241.877L968.703 242.171L966.016 234.604H967.794ZM976.7 236.025V244.844H975.052V234.604H976.57L976.7 236.025ZM981.519 238.233V238.377C981.519 238.915 981.455 239.414 981.328 239.874C981.204 240.33 981.02 240.729 980.774 241.07C980.532 241.408 980.234 241.67 979.878 241.856C979.523 242.043 979.113 242.137 978.648 242.137C978.188 242.137 977.784 242.052 977.438 241.884C977.096 241.711 976.807 241.467 976.57 241.152C976.333 240.838 976.141 240.469 975.996 240.045C975.854 239.617 975.754 239.147 975.695 238.637V238.083C975.754 237.541 975.854 237.049 975.996 236.606C976.141 236.164 976.333 235.784 976.57 235.465C976.807 235.146 977.096 234.9 977.438 234.727C977.78 234.553 978.178 234.467 978.634 234.467C979.099 234.467 979.511 234.558 979.871 234.74C980.232 234.918 980.535 235.173 980.781 235.506C981.027 235.834 981.211 236.23 981.334 236.695C981.457 237.156 981.519 237.668 981.519 238.233ZM979.871 238.377V238.233C979.871 237.892 979.84 237.575 979.776 237.283C979.712 236.987 979.612 236.727 979.475 236.504C979.338 236.281 979.163 236.107 978.949 235.984C978.739 235.857 978.486 235.793 978.19 235.793C977.898 235.793 977.648 235.843 977.438 235.943C977.228 236.039 977.053 236.174 976.912 236.347C976.77 236.52 976.661 236.723 976.583 236.955C976.506 237.183 976.451 237.431 976.419 237.7V239.026C976.474 239.354 976.567 239.655 976.7 239.929C976.832 240.202 977.019 240.421 977.26 240.585C977.506 240.744 977.821 240.824 978.204 240.824C978.5 240.824 978.753 240.76 978.962 240.633C979.172 240.505 979.343 240.33 979.475 240.106C979.612 239.879 979.712 239.617 979.776 239.32C979.84 239.024 979.871 238.71 979.871 238.377ZM988.962 231.363H990.295C990.295 231.769 990.238 232.104 990.124 232.368C990.015 232.628 989.851 232.842 989.632 233.011C989.418 233.175 989.151 233.307 988.832 233.407C988.518 233.507 988.153 233.599 987.738 233.681C987.355 233.763 987.009 233.893 986.699 234.07C986.394 234.243 986.136 234.487 985.927 234.802C985.722 235.112 985.574 235.51 985.482 235.998C985.391 236.486 985.364 237.08 985.4 237.782V238.247L984.095 238.363V237.898C984.095 237.028 984.174 236.269 984.334 235.622C984.493 234.975 984.719 234.43 985.011 233.988C985.307 233.542 985.658 233.186 986.063 232.922C986.474 232.658 986.929 232.475 987.431 232.375C987.772 232.302 988.057 232.229 988.285 232.156C988.513 232.079 988.682 231.981 988.791 231.862C988.905 231.739 988.962 231.573 988.962 231.363ZM987.807 235.021C988.299 235.021 988.736 235.107 989.119 235.28C989.502 235.449 989.826 235.686 990.09 235.991C990.354 236.297 990.555 236.657 990.691 237.071C990.833 237.486 990.903 237.937 990.903 238.425V238.575C990.903 239.086 990.828 239.557 990.678 239.99C990.527 240.423 990.306 240.801 990.015 241.125C989.723 241.444 989.365 241.695 988.941 241.877C988.522 242.055 988.041 242.144 987.499 242.144C986.961 242.144 986.48 242.05 986.057 241.863C985.633 241.676 985.275 241.417 984.983 241.084C984.692 240.747 984.471 240.353 984.32 239.901C984.17 239.45 984.095 238.958 984.095 238.425V238.274C984.09 238.179 984.115 238.085 984.17 237.994C984.229 237.903 984.3 237.805 984.382 237.7C984.464 237.595 984.537 237.475 984.601 237.338C984.828 236.878 985.097 236.474 985.407 236.128C985.717 235.782 986.07 235.51 986.467 235.314C986.868 235.118 987.314 235.021 987.807 235.021ZM987.485 236.326C987.075 236.326 986.74 236.424 986.48 236.62C986.225 236.812 986.036 237.067 985.913 237.386C985.795 237.705 985.735 238.051 985.735 238.425V238.575C985.735 238.881 985.77 239.17 985.838 239.443C985.906 239.717 986.009 239.958 986.146 240.168C986.287 240.373 986.469 240.535 986.692 240.653C986.92 240.772 987.189 240.831 987.499 240.831C987.813 240.831 988.08 240.772 988.299 240.653C988.522 240.535 988.702 240.373 988.839 240.168C988.98 239.958 989.083 239.717 989.146 239.443C989.215 239.17 989.249 238.881 989.249 238.575V238.425C989.249 238.142 989.215 237.876 989.146 237.625C989.083 237.374 988.98 237.153 988.839 236.962C988.698 236.766 988.515 236.611 988.292 236.497C988.069 236.383 987.8 236.326 987.485 236.326ZM995.174 239.594L998.08 234.604H999.727V242H998.08V237.003L995.174 242H993.527V234.604H995.174V239.594ZM1007.92 237.693V238.992H1004.09V237.693H1007.92ZM1004.57 234.604V242H1002.93V234.604H1004.57ZM1009.11 234.604V242H1007.46V234.604H1009.11ZM1013.49 236.955H1015.67C1016.31 236.955 1016.85 237.062 1017.3 237.276C1017.75 237.491 1018.09 237.789 1018.32 238.172C1018.56 238.55 1018.67 238.983 1018.67 239.471C1018.67 239.831 1018.61 240.166 1018.48 240.476C1018.34 240.781 1018.15 241.048 1017.89 241.275C1017.63 241.503 1017.32 241.681 1016.94 241.809C1016.57 241.936 1016.15 242 1015.67 242H1012.4V234.604H1014.05V240.694H1015.67C1016 240.694 1016.26 240.637 1016.46 240.523C1016.65 240.41 1016.8 240.261 1016.88 240.079C1016.97 239.897 1017.02 239.703 1017.02 239.498C1017.02 239.288 1016.97 239.09 1016.88 238.903C1016.8 238.716 1016.65 238.564 1016.46 238.445C1016.26 238.327 1016 238.268 1015.67 238.268H1013.49V236.955ZM1021.59 234.604V242H1019.94V234.604H1021.59Z" fill="black"/>
        </Fragment>
    );
};