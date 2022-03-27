import React, { Fragment } from 'react'

export const Electric1 = (props) => {
    const {isActive} = props
    return (
        <Fragment>
            {/* <rect x="131" y="100" width="1658.25" height="737" fill="url(#pattern6)"
                style={{opacity: isActive ? 1 : 0}}
            /> */}

            <circle cx="826" cy="473" r="4" fill="white" style={{opacity: isActive ? 1 : 0}}/>

            <path d="M826 472.353L856.535 521.353" stroke="white" style={{opacity: isActive ? 1 : 0}}/>

        <path d="M1037.5 521.853H856.535" stroke="white" style={{opacity: isActive ? 1 : 0}}/>

        <path style={{opacity: isActive ? 1 : 0}} d="M863.547 535.347V536.714H859.384V535.347H863.547ZM856.684 537.76H858.393C858.443 538.197 858.545 538.566 858.7 538.867C858.86 539.168 859.09 539.396 859.391 539.551C859.696 539.706 860.095 539.783 860.587 539.783C860.983 539.783 861.325 539.703 861.612 539.544C861.904 539.384 862.143 539.159 862.33 538.867C862.517 538.571 862.656 538.22 862.747 537.814C862.838 537.404 862.884 536.946 862.884 536.44V535.606C862.884 535.183 862.852 534.798 862.788 534.451C862.724 534.1 862.626 533.79 862.494 533.521C862.367 533.253 862.207 533.027 862.016 532.845C861.829 532.658 861.61 532.517 861.359 532.421C861.109 532.325 860.828 532.277 860.519 532.277C860.04 532.277 859.653 532.359 859.356 532.523C859.06 532.683 858.837 532.918 858.687 533.228C858.536 533.533 858.436 533.902 858.386 534.335H856.677C856.745 533.665 856.932 533.073 857.237 532.558C857.543 532.043 857.966 531.639 858.509 531.348C859.056 531.056 859.726 530.91 860.519 530.91C861.143 530.91 861.703 531.022 862.2 531.245C862.701 531.464 863.13 531.781 863.485 532.195C863.841 532.605 864.112 533.1 864.299 533.679C864.49 534.257 864.586 534.905 864.586 535.62V536.44C864.586 537.156 864.493 537.803 864.306 538.382C864.123 538.961 863.857 539.455 863.506 539.865C863.155 540.275 862.733 540.59 862.241 540.809C861.749 541.027 861.198 541.137 860.587 541.137C859.78 541.137 859.097 540.993 858.536 540.706C857.98 540.414 857.547 540.013 857.237 539.503C856.927 538.993 856.743 538.411 856.684 537.76ZM872.309 533.604V534.916H868.7V533.604H872.309ZM873.601 533.604V541H871.954V533.604H873.601ZM868.296 533.604H869.923L869.725 537.261C869.698 537.803 869.643 538.282 869.561 538.696C869.484 539.106 869.379 539.46 869.247 539.756C869.115 540.048 868.953 540.285 868.761 540.467C868.57 540.649 868.347 540.784 868.091 540.87C867.836 540.957 867.549 541 867.23 541H866.717L866.711 539.646L866.97 539.626C867.139 539.612 867.285 539.569 867.408 539.496C867.531 539.419 867.636 539.309 867.722 539.168C867.813 539.027 867.886 538.844 867.941 538.621C868 538.398 868.046 538.133 868.078 537.828C868.114 537.523 868.142 537.167 868.16 536.762L868.296 533.604ZM880.012 541.137C879.465 541.137 878.971 541.048 878.529 540.87C878.091 540.688 877.717 540.435 877.407 540.111C877.102 539.788 876.867 539.407 876.703 538.97C876.539 538.532 876.457 538.061 876.457 537.555V537.281C876.457 536.702 876.542 536.178 876.71 535.709C876.879 535.24 877.113 534.839 877.414 534.506C877.715 534.169 878.071 533.911 878.481 533.733C878.891 533.556 879.335 533.467 879.814 533.467C880.342 533.467 880.805 533.556 881.201 533.733C881.598 533.911 881.926 534.162 882.186 534.485C882.45 534.804 882.646 535.185 882.774 535.627C882.906 536.069 882.972 536.557 882.972 537.09V537.794H877.257V536.611H881.345V536.481C881.336 536.185 881.277 535.907 881.167 535.647C881.062 535.388 880.901 535.178 880.682 535.019C880.463 534.859 880.171 534.779 879.807 534.779C879.533 534.779 879.29 534.839 879.075 534.957C878.866 535.071 878.69 535.237 878.549 535.456C878.408 535.675 878.298 535.939 878.221 536.249C878.148 536.554 878.112 536.898 878.112 537.281V537.555C878.112 537.878 878.155 538.179 878.241 538.457C878.333 538.73 878.465 538.97 878.638 539.175C878.811 539.38 879.021 539.542 879.267 539.66C879.513 539.774 879.793 539.831 880.108 539.831C880.504 539.831 880.857 539.751 881.167 539.592C881.477 539.432 881.746 539.207 881.974 538.915L882.842 539.756C882.682 539.988 882.475 540.212 882.22 540.426C881.965 540.635 881.653 540.806 881.283 540.938C880.919 541.071 880.495 541.137 880.012 541.137ZM887.434 533.604V541H885.787V533.604H887.434ZM892.261 533.604L888.931 538.054H887.052L886.833 536.563H888.207L890.203 533.604H892.261ZM890.333 541L888.104 537.773L889.403 536.837L892.5 541H890.333ZM898.227 533.604V541H896.573V533.604H898.227ZM900.654 533.604V534.902H894.187V533.604H900.654ZM904.809 535.025V543.844H903.161V533.604H904.679L904.809 535.025ZM909.628 537.233V537.377C909.628 537.915 909.564 538.414 909.437 538.874C909.313 539.33 909.129 539.729 908.883 540.07C908.641 540.408 908.343 540.67 907.987 540.856C907.632 541.043 907.222 541.137 906.757 541.137C906.297 541.137 905.893 541.052 905.547 540.884C905.205 540.711 904.916 540.467 904.679 540.152C904.442 539.838 904.25 539.469 904.104 539.045C903.963 538.617 903.863 538.147 903.804 537.637V537.083C903.863 536.541 903.963 536.049 904.104 535.606C904.25 535.164 904.442 534.784 904.679 534.465C904.916 534.146 905.205 533.9 905.547 533.727C905.889 533.553 906.287 533.467 906.743 533.467C907.208 533.467 907.62 533.558 907.98 533.74C908.34 533.918 908.644 534.173 908.89 534.506C909.136 534.834 909.32 535.23 909.443 535.695C909.566 536.156 909.628 536.668 909.628 537.233ZM907.98 537.377V537.233C907.98 536.892 907.949 536.575 907.885 536.283C907.821 535.987 907.721 535.727 907.584 535.504C907.447 535.281 907.272 535.107 907.058 534.984C906.848 534.857 906.595 534.793 906.299 534.793C906.007 534.793 905.757 534.843 905.547 534.943C905.337 535.039 905.162 535.174 905.021 535.347C904.879 535.52 904.77 535.723 904.692 535.955C904.615 536.183 904.56 536.431 904.528 536.7V538.026C904.583 538.354 904.676 538.655 904.809 538.929C904.941 539.202 905.128 539.421 905.369 539.585C905.615 539.744 905.93 539.824 906.312 539.824C906.609 539.824 906.862 539.76 907.071 539.633C907.281 539.505 907.452 539.33 907.584 539.106C907.721 538.879 907.821 538.617 907.885 538.32C907.949 538.024 907.98 537.71 907.98 537.377ZM914.131 538.594L917.037 533.604H918.684V541H917.037V536.003L914.131 541H912.484V533.604H914.131V538.594ZM927.768 533.604V541H926.12V533.604H927.768ZM927.071 536.878V538.184C926.87 538.27 926.644 538.35 926.394 538.423C926.148 538.491 925.888 538.548 925.614 538.594C925.341 538.635 925.065 538.655 924.787 538.655C924.136 538.655 923.573 538.555 923.099 538.354C922.629 538.154 922.267 537.846 922.012 537.432C921.761 537.012 921.636 536.481 921.636 535.839V533.597H923.277V535.839C923.277 536.208 923.331 536.502 923.441 536.721C923.555 536.939 923.723 537.097 923.946 537.192C924.17 537.288 924.45 537.336 924.787 537.336C925.07 537.336 925.336 537.318 925.587 537.281C925.838 537.24 926.086 537.186 926.332 537.117C926.578 537.049 926.824 536.969 927.071 536.878ZM934.185 541.137C933.638 541.137 933.144 541.048 932.702 540.87C932.264 540.688 931.891 540.435 931.581 540.111C931.276 539.788 931.041 539.407 930.877 538.97C930.713 538.532 930.631 538.061 930.631 537.555V537.281C930.631 536.702 930.715 536.178 930.884 535.709C931.052 535.24 931.287 534.839 931.588 534.506C931.888 534.169 932.244 533.911 932.654 533.733C933.064 533.556 933.509 533.467 933.987 533.467C934.516 533.467 934.978 533.556 935.375 533.733C935.771 533.911 936.099 534.162 936.359 534.485C936.623 534.804 936.819 535.185 936.947 535.627C937.079 536.069 937.145 536.557 937.145 537.09V537.794H931.43V536.611H935.518V536.481C935.509 536.185 935.45 535.907 935.341 535.647C935.236 535.388 935.074 535.178 934.855 535.019C934.637 534.859 934.345 534.779 933.98 534.779C933.707 534.779 933.463 534.839 933.249 534.957C933.039 535.071 932.864 535.237 932.722 535.456C932.581 535.675 932.472 535.939 932.394 536.249C932.321 536.554 932.285 536.898 932.285 537.281V537.555C932.285 537.878 932.328 538.179 932.415 538.457C932.506 538.73 932.638 538.97 932.811 539.175C932.985 539.38 933.194 539.542 933.44 539.66C933.686 539.774 933.967 539.831 934.281 539.831C934.678 539.831 935.031 539.751 935.341 539.592C935.651 539.432 935.919 539.207 936.147 538.915L937.015 539.756C936.856 539.988 936.649 540.212 936.393 540.426C936.138 540.635 935.826 540.806 935.457 540.938C935.092 541.071 934.668 541.137 934.185 541.137ZM942.852 539.824C943.121 539.824 943.362 539.772 943.577 539.667C943.795 539.558 943.971 539.407 944.103 539.216C944.24 539.024 944.315 538.803 944.329 538.553H945.88C945.871 539.031 945.73 539.466 945.456 539.858C945.183 540.25 944.821 540.562 944.37 540.795C943.918 541.023 943.419 541.137 942.872 541.137C942.307 541.137 941.815 541.041 941.396 540.85C940.977 540.654 940.628 540.385 940.35 540.043C940.072 539.701 939.862 539.307 939.721 538.86C939.584 538.414 939.516 537.935 939.516 537.425V537.186C939.516 536.675 939.584 536.197 939.721 535.75C939.862 535.299 940.072 534.902 940.35 534.561C940.628 534.219 940.977 533.952 941.396 533.761C941.815 533.565 942.305 533.467 942.866 533.467C943.458 533.467 943.978 533.585 944.424 533.822C944.871 534.055 945.222 534.381 945.477 534.8C945.737 535.215 945.871 535.698 945.88 536.249H944.329C944.315 535.976 944.246 535.729 944.123 535.511C944.005 535.287 943.836 535.11 943.618 534.978C943.403 534.845 943.146 534.779 942.845 534.779C942.512 534.779 942.237 534.848 942.018 534.984C941.799 535.117 941.628 535.299 941.505 535.531C941.382 535.759 941.293 536.017 941.239 536.304C941.189 536.586 941.163 536.88 941.163 537.186V537.425C941.163 537.73 941.189 538.026 941.239 538.313C941.289 538.601 941.375 538.858 941.498 539.086C941.626 539.309 941.799 539.489 942.018 539.626C942.237 539.758 942.515 539.824 942.852 539.824ZM950.322 533.604V541H948.675V533.604H950.322ZM955.148 533.604L951.819 538.054H949.939L949.721 536.563H951.095L953.091 533.604H955.148ZM953.221 541L950.992 537.773L952.291 536.837L955.388 541H953.221ZM959.385 538.594L962.291 533.604H963.938V541H962.291V536.003L959.385 541H957.738V533.604H959.385V538.594ZM970.342 541.137C969.795 541.137 969.301 541.048 968.859 540.87C968.421 540.688 968.047 540.435 967.738 540.111C967.432 539.788 967.197 539.407 967.033 538.97C966.869 538.532 966.787 538.061 966.787 537.555V537.281C966.787 536.702 966.872 536.178 967.04 535.709C967.209 535.24 967.444 534.839 967.744 534.506C968.045 534.169 968.401 533.911 968.811 533.733C969.221 533.556 969.665 533.467 970.144 533.467C970.672 533.467 971.135 533.556 971.531 533.733C971.928 533.911 972.256 534.162 972.516 534.485C972.78 534.804 972.976 535.185 973.104 535.627C973.236 536.069 973.302 536.557 973.302 537.09V537.794H967.587V536.611H971.675V536.481C971.666 536.185 971.607 535.907 971.497 535.647C971.392 535.388 971.231 535.178 971.012 535.019C970.793 534.859 970.502 534.779 970.137 534.779C969.863 534.779 969.62 534.839 969.405 534.957C969.196 535.071 969.02 535.237 968.879 535.456C968.738 535.675 968.628 535.939 968.551 536.249C968.478 536.554 968.442 536.898 968.442 537.281V537.555C968.442 537.878 968.485 538.179 968.571 538.457C968.663 538.73 968.795 538.97 968.968 539.175C969.141 539.38 969.351 539.542 969.597 539.66C969.843 539.774 970.123 539.831 970.438 539.831C970.834 539.831 971.187 539.751 971.497 539.592C971.807 539.432 972.076 539.207 972.304 538.915L973.172 539.756C973.013 539.988 972.805 540.212 972.55 540.426C972.295 540.635 971.983 540.806 971.613 540.938C971.249 541.071 970.825 541.137 970.342 541.137ZM983.936 537.466H982.514V536.632H983.662C983.954 536.632 984.187 536.593 984.36 536.516C984.537 536.438 984.663 536.331 984.736 536.194C984.813 536.053 984.852 535.889 984.852 535.702C984.852 535.538 984.813 535.383 984.736 535.237C984.663 535.087 984.537 534.964 984.36 534.868C984.182 534.772 983.94 534.725 983.635 534.725C983.385 534.725 983.159 534.766 982.958 534.848C982.762 534.93 982.607 535.044 982.494 535.189C982.38 535.335 982.323 535.504 982.323 535.695H980.675C980.675 535.235 980.805 534.839 981.065 534.506C981.329 534.173 981.682 533.918 982.124 533.74C982.566 533.562 983.052 533.474 983.58 533.474C984.032 533.474 984.437 533.521 984.797 533.617C985.157 533.708 985.463 533.845 985.713 534.027C985.968 534.205 986.162 534.428 986.294 534.697C986.431 534.962 986.499 535.269 986.499 535.62C986.499 535.871 986.44 536.108 986.322 536.331C986.203 536.554 986.032 536.753 985.809 536.926C985.586 537.094 985.315 537.227 984.996 537.322C984.681 537.418 984.328 537.466 983.936 537.466ZM982.514 536.987H983.936C984.373 536.987 984.761 537.031 985.098 537.117C985.435 537.199 985.718 537.322 985.946 537.486C986.174 537.65 986.344 537.853 986.458 538.095C986.577 538.332 986.636 538.605 986.636 538.915C986.636 539.261 986.561 539.574 986.411 539.852C986.265 540.125 986.055 540.357 985.782 540.549C985.513 540.74 985.191 540.886 984.818 540.986C984.444 541.087 984.032 541.137 983.58 541.137C983.088 541.137 982.61 541.055 982.145 540.891C981.685 540.727 981.304 540.474 981.003 540.132C980.707 539.785 980.559 539.346 980.559 538.812H982.206C982.206 538.999 982.263 539.175 982.377 539.339C982.491 539.503 982.655 539.637 982.87 539.742C983.084 539.842 983.341 539.893 983.642 539.893C983.952 539.893 984.205 539.845 984.401 539.749C984.597 539.649 984.743 539.519 984.838 539.359C984.934 539.195 984.982 539.022 984.982 538.84C984.982 538.594 984.934 538.396 984.838 538.245C984.743 538.095 984.597 537.985 984.401 537.917C984.205 537.844 983.959 537.808 983.662 537.808H982.514V536.987ZM990.777 533.604H992.425L992.343 536.208C992.32 536.965 992.233 537.614 992.083 538.156C991.933 538.699 991.737 539.157 991.495 539.53C991.254 539.899 990.98 540.202 990.675 540.439C990.374 540.676 990.057 540.863 989.725 541H989.239V539.701L989.472 539.688C989.668 539.478 989.836 539.268 989.978 539.059C990.123 538.844 990.246 538.61 990.347 538.354C990.447 538.095 990.524 537.792 990.579 537.445C990.638 537.099 990.677 536.687 990.695 536.208L990.777 533.604ZM991.215 533.604H995.904V541H994.264V534.998H991.215V533.604ZM988.863 539.688H996.916V543.201H995.269V541H990.531V543.201H988.856L988.863 539.688ZM1003.66 539.517V535.989C1003.66 535.725 1003.61 535.497 1003.52 535.306C1003.42 535.114 1003.28 534.966 1003.08 534.861C1002.89 534.757 1002.65 534.704 1002.36 534.704C1002.09 534.704 1001.85 534.75 1001.66 534.841C1001.46 534.932 1001.31 535.055 1001.2 535.21C1001.09 535.365 1001.04 535.54 1001.04 535.736H999.396C999.396 535.445 999.467 535.162 999.608 534.889C999.749 534.615 999.954 534.371 1000.22 534.157C1000.49 533.943 1000.81 533.774 1001.19 533.651C1001.56 533.528 1001.98 533.467 1002.44 533.467C1003 533.467 1003.49 533.56 1003.92 533.747C1004.35 533.934 1004.69 534.216 1004.94 534.595C1005.19 534.968 1005.32 535.438 1005.32 536.003V539.291C1005.32 539.628 1005.34 539.931 1005.38 540.2C1005.43 540.465 1005.51 540.695 1005.6 540.891V541H1003.91C1003.83 540.822 1003.77 540.597 1003.72 540.323C1003.68 540.045 1003.66 539.776 1003.66 539.517ZM1003.9 536.502L1003.91 537.521H1002.73C1002.43 537.521 1002.16 537.55 1001.93 537.609C1001.69 537.664 1001.5 537.746 1001.34 537.855C1001.19 537.965 1001.07 538.097 1001 538.252C1000.92 538.407 1000.88 538.582 1000.88 538.778C1000.88 538.974 1000.93 539.154 1001.02 539.318C1001.11 539.478 1001.24 539.603 1001.41 539.694C1001.59 539.785 1001.8 539.831 1002.06 539.831C1002.39 539.831 1002.69 539.763 1002.94 539.626C1003.19 539.485 1003.39 539.314 1003.54 539.113C1003.68 538.908 1003.76 538.715 1003.77 538.532L1004.3 539.264C1004.25 539.451 1004.16 539.651 1004.02 539.865C1003.89 540.079 1003.72 540.285 1003.5 540.48C1003.29 540.672 1003.04 540.829 1002.75 540.952C1002.45 541.075 1002.12 541.137 1001.73 541.137C1001.25 541.137 1000.82 541.041 1000.44 540.85C1000.06 540.654 999.768 540.392 999.553 540.063C999.339 539.731 999.232 539.355 999.232 538.936C999.232 538.544 999.305 538.197 999.451 537.896C999.601 537.591 999.82 537.336 1000.11 537.131C1000.4 536.926 1000.75 536.771 1001.17 536.666C1001.59 536.557 1002.07 536.502 1002.61 536.502H1003.9ZM1013.49 536.693V537.992H1009.66V536.693H1013.49ZM1010.14 533.604V541H1008.49V533.604H1010.14ZM1014.68 533.604V541H1013.03V533.604H1014.68ZM1019.54 538.594L1022.44 533.604H1024.09V541H1022.44V536.003L1019.54 541H1017.89V533.604H1019.54V538.594ZM1028.79 537.384H1030.5L1028.4 541H1026.7L1028.79 537.384ZM1030 533.604H1033.17V541H1031.53V534.902H1030C1029.69 534.902 1029.43 534.957 1029.23 535.066C1029.03 535.171 1028.88 535.31 1028.79 535.483C1028.69 535.652 1028.64 535.825 1028.64 536.003C1028.64 536.181 1028.69 536.352 1028.77 536.516C1028.86 536.68 1029 536.814 1029.19 536.919C1029.38 537.024 1029.62 537.076 1029.91 537.076H1032.08V538.279H1029.91C1029.45 538.279 1029.04 538.222 1028.68 538.108C1028.32 537.99 1028.02 537.828 1027.77 537.623C1027.52 537.413 1027.33 537.17 1027.19 536.892C1027.06 536.609 1027 536.301 1027 535.969C1027 535.627 1027.06 535.312 1027.2 535.025C1027.34 534.738 1027.53 534.488 1027.79 534.273C1028.05 534.059 1028.36 533.895 1028.73 533.781C1029.11 533.663 1029.53 533.604 1030 533.604Z" fill="white"/>
        </Fragment>
    );
};