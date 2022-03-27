
import React, { Fragment } from 'react'

export const Pools = (props) => {
    const {isActive} = props

    return (
        <Fragment>
            <rect x="131" y="100" width="1658.25" height="737" fill="url(#pattern9)"
                style={{opacity: isActive ? 1 : 0}}
            />

            <circle cx="1436" cy="478" r="4" fill="white" style={{opacity: isActive ? 1 : 0}}/>
            
            <path d="M1434 477L1492.14 394" stroke="#263973" style={{opacity: isActive ? 1 : 0}}/>

            <path d="M1683 394L1492.14 394" stroke="#263973" style={{opacity: isActive ? 1 : 0}}/>

        <path style={{opacity: isActive ? 1 : 0}} d="M1501.32 372.047V373.414H1496.69V382H1494.98V372.047H1501.32ZM1496.17 375.868H1498.68C1499.43 375.868 1500.08 375.996 1500.62 376.251C1501.15 376.502 1501.57 376.855 1501.85 377.311C1502.13 377.766 1502.27 378.297 1502.27 378.903C1502.27 379.359 1502.19 379.776 1502.03 380.154C1501.87 380.533 1501.64 380.861 1501.33 381.139C1501.02 381.412 1500.64 381.624 1500.19 381.774C1499.75 381.925 1499.25 382 1498.68 382H1494.98V372.047H1496.71V380.64H1498.68C1499.11 380.64 1499.46 380.56 1499.74 380.4C1500.02 380.236 1500.23 380.022 1500.36 379.758C1500.49 379.493 1500.56 379.204 1500.56 378.89C1500.56 378.584 1500.49 378.306 1500.36 378.056C1500.23 377.805 1500.02 377.604 1499.74 377.454C1499.46 377.304 1499.11 377.229 1498.68 377.229H1496.17V375.868ZM1506.6 376.025V384.844H1504.95V374.604H1506.47L1506.6 376.025ZM1511.42 378.233V378.377C1511.42 378.915 1511.35 379.414 1511.23 379.874C1511.1 380.33 1510.92 380.729 1510.67 381.07C1510.43 381.408 1510.13 381.67 1509.78 381.856C1509.42 382.043 1509.01 382.137 1508.55 382.137C1508.09 382.137 1507.68 382.052 1507.34 381.884C1506.99 381.711 1506.7 381.467 1506.47 381.152C1506.23 380.838 1506.04 380.469 1505.89 380.045C1505.75 379.617 1505.65 379.147 1505.59 378.637V378.083C1505.65 377.541 1505.75 377.049 1505.89 376.606C1506.04 376.164 1506.23 375.784 1506.47 375.465C1506.7 375.146 1506.99 374.9 1507.34 374.727C1507.68 374.553 1508.08 374.467 1508.53 374.467C1509 374.467 1509.41 374.558 1509.77 374.74C1510.13 374.918 1510.43 375.173 1510.68 375.506C1510.92 375.834 1511.11 376.23 1511.23 376.695C1511.36 377.156 1511.42 377.668 1511.42 378.233ZM1509.77 378.377V378.233C1509.77 377.892 1509.74 377.575 1509.67 377.283C1509.61 376.987 1509.51 376.727 1509.37 376.504C1509.24 376.281 1509.06 376.107 1508.85 375.984C1508.64 375.857 1508.38 375.793 1508.09 375.793C1507.8 375.793 1507.55 375.843 1507.34 375.943C1507.13 376.039 1506.95 376.174 1506.81 376.347C1506.67 376.52 1506.56 376.723 1506.48 376.955C1506.4 377.183 1506.35 377.431 1506.32 377.7V379.026C1506.37 379.354 1506.47 379.655 1506.6 379.929C1506.73 380.202 1506.92 380.421 1507.16 380.585C1507.4 380.744 1507.72 380.824 1508.1 380.824C1508.4 380.824 1508.65 380.76 1508.86 380.633C1509.07 380.505 1509.24 380.33 1509.37 380.106C1509.51 379.879 1509.61 379.617 1509.67 379.32C1509.74 379.024 1509.77 378.71 1509.77 378.377ZM1515.44 376.955H1517.62C1518.26 376.955 1518.8 377.062 1519.25 377.276C1519.7 377.491 1520.04 377.789 1520.27 378.172C1520.5 378.55 1520.62 378.983 1520.62 379.471C1520.62 379.831 1520.56 380.166 1520.42 380.476C1520.29 380.781 1520.1 381.048 1519.84 381.275C1519.58 381.503 1519.27 381.681 1518.89 381.809C1518.52 381.936 1518.1 382 1517.62 382H1514.35V374.604H1516V380.694H1517.62C1517.95 380.694 1518.21 380.637 1518.41 380.523C1518.6 380.41 1518.75 380.261 1518.83 380.079C1518.92 379.897 1518.97 379.703 1518.97 379.498C1518.97 379.288 1518.92 379.09 1518.83 378.903C1518.75 378.716 1518.6 378.564 1518.41 378.445C1518.21 378.327 1517.95 378.268 1517.62 378.268H1515.44V376.955ZM1523.54 374.604V382H1521.89V374.604H1523.54ZM1529.95 378.466H1528.52V377.632H1529.67C1529.96 377.632 1530.2 377.593 1530.37 377.516C1530.55 377.438 1530.67 377.331 1530.75 377.194C1530.82 377.053 1530.86 376.889 1530.86 376.702C1530.86 376.538 1530.82 376.383 1530.75 376.237C1530.67 376.087 1530.55 375.964 1530.37 375.868C1530.19 375.772 1529.95 375.725 1529.65 375.725C1529.39 375.725 1529.17 375.766 1528.97 375.848C1528.77 375.93 1528.62 376.044 1528.5 376.189C1528.39 376.335 1528.33 376.504 1528.33 376.695H1526.69C1526.69 376.235 1526.82 375.839 1527.08 375.506C1527.34 375.173 1527.69 374.918 1528.13 374.74C1528.58 374.562 1529.06 374.474 1529.59 374.474C1530.04 374.474 1530.45 374.521 1530.81 374.617C1531.17 374.708 1531.47 374.845 1531.72 375.027C1531.98 375.205 1532.17 375.428 1532.3 375.697C1532.44 375.962 1532.51 376.269 1532.51 376.62C1532.51 376.871 1532.45 377.108 1532.33 377.331C1532.21 377.554 1532.04 377.753 1531.82 377.926C1531.6 378.094 1531.32 378.227 1531.01 378.322C1530.69 378.418 1530.34 378.466 1529.95 378.466ZM1528.52 377.987H1529.95C1530.38 377.987 1530.77 378.031 1531.11 378.117C1531.45 378.199 1531.73 378.322 1531.96 378.486C1532.18 378.65 1532.35 378.853 1532.47 379.095C1532.59 379.332 1532.65 379.605 1532.65 379.915C1532.65 380.261 1532.57 380.574 1532.42 380.852C1532.27 381.125 1532.07 381.357 1531.79 381.549C1531.52 381.74 1531.2 381.886 1530.83 381.986C1530.45 382.087 1530.04 382.137 1529.59 382.137C1529.1 382.137 1528.62 382.055 1528.16 381.891C1527.69 381.727 1527.31 381.474 1527.01 381.132C1526.72 380.785 1526.57 380.346 1526.57 379.812H1528.22C1528.22 379.999 1528.27 380.175 1528.39 380.339C1528.5 380.503 1528.67 380.637 1528.88 380.742C1529.09 380.842 1529.35 380.893 1529.65 380.893C1529.96 380.893 1530.21 380.845 1530.41 380.749C1530.61 380.649 1530.75 380.519 1530.85 380.359C1530.94 380.195 1530.99 380.022 1530.99 379.84C1530.99 379.594 1530.94 379.396 1530.85 379.245C1530.75 379.095 1530.61 378.985 1530.41 378.917C1530.21 378.844 1529.97 378.808 1529.67 378.808H1528.52V377.987ZM1540.37 374.604V375.916H1537.14V382H1535.5V374.604H1540.37ZM1546.9 380.517V376.989C1546.9 376.725 1546.85 376.497 1546.75 376.306C1546.66 376.114 1546.51 375.966 1546.32 375.861C1546.12 375.757 1545.88 375.704 1545.59 375.704C1545.32 375.704 1545.09 375.75 1544.89 375.841C1544.7 375.932 1544.54 376.055 1544.44 376.21C1544.33 376.365 1544.27 376.54 1544.27 376.736H1542.63C1542.63 376.445 1542.7 376.162 1542.84 375.889C1542.98 375.615 1543.19 375.371 1543.46 375.157C1543.73 374.943 1544.05 374.774 1544.42 374.651C1544.8 374.528 1545.21 374.467 1545.68 374.467C1546.24 374.467 1546.73 374.56 1547.16 374.747C1547.59 374.934 1547.93 375.216 1548.17 375.595C1548.43 375.968 1548.55 376.438 1548.55 377.003V380.291C1548.55 380.628 1548.57 380.931 1548.62 381.2C1548.67 381.465 1548.74 381.695 1548.83 381.891V382H1547.14C1547.07 381.822 1547 381.597 1546.96 381.323C1546.92 381.045 1546.9 380.776 1546.9 380.517ZM1547.14 377.502L1547.15 378.521H1545.97C1545.66 378.521 1545.39 378.55 1545.16 378.609C1544.93 378.664 1544.73 378.746 1544.58 378.855C1544.42 378.965 1544.31 379.097 1544.23 379.252C1544.15 379.407 1544.11 379.582 1544.11 379.778C1544.11 379.974 1544.16 380.154 1544.25 380.318C1544.34 380.478 1544.47 380.603 1544.65 380.694C1544.83 380.785 1545.04 380.831 1545.29 380.831C1545.63 380.831 1545.92 380.763 1546.17 380.626C1546.43 380.485 1546.63 380.314 1546.77 380.113C1546.92 379.908 1547 379.715 1547.01 379.532L1547.54 380.264C1547.48 380.451 1547.39 380.651 1547.26 380.865C1547.13 381.079 1546.95 381.285 1546.74 381.48C1546.53 381.672 1546.28 381.829 1545.98 381.952C1545.69 382.075 1545.35 382.137 1544.97 382.137C1544.49 382.137 1544.06 382.041 1543.68 381.85C1543.3 381.654 1543 381.392 1542.79 381.063C1542.57 380.731 1542.47 380.355 1542.47 379.936C1542.47 379.544 1542.54 379.197 1542.69 378.896C1542.84 378.591 1543.05 378.336 1543.34 378.131C1543.63 377.926 1543.99 377.771 1544.41 377.666C1544.83 377.557 1545.31 377.502 1545.84 377.502H1547.14ZM1556.64 374.604V375.916H1553.03V374.604H1556.64ZM1557.94 374.604V382H1556.29V374.604H1557.94ZM1552.63 374.604H1554.26L1554.06 378.261C1554.03 378.803 1553.98 379.282 1553.9 379.696C1553.82 380.106 1553.71 380.46 1553.58 380.756C1553.45 381.048 1553.29 381.285 1553.1 381.467C1552.9 381.649 1552.68 381.784 1552.43 381.87C1552.17 381.957 1551.88 382 1551.56 382H1551.05L1551.04 380.646L1551.3 380.626C1551.47 380.612 1551.62 380.569 1551.74 380.496C1551.86 380.419 1551.97 380.309 1552.06 380.168C1552.15 380.027 1552.22 379.844 1552.28 379.621C1552.33 379.398 1552.38 379.133 1552.41 378.828C1552.45 378.523 1552.48 378.167 1552.49 377.762L1552.63 374.604ZM1562.31 376.955H1564.49C1565.13 376.955 1565.67 377.062 1566.12 377.276C1566.56 377.491 1566.9 377.789 1567.13 378.172C1567.37 378.55 1567.49 378.983 1567.49 379.471C1567.49 379.831 1567.42 380.166 1567.29 380.476C1567.16 380.781 1566.96 381.048 1566.7 381.275C1566.45 381.503 1566.13 381.681 1565.76 381.809C1565.39 381.936 1564.97 382 1564.49 382H1561.22V374.604H1562.87V380.694H1564.49C1564.82 380.694 1565.08 380.637 1565.28 380.523C1565.47 380.41 1565.61 380.261 1565.7 380.079C1565.79 379.897 1565.84 379.703 1565.84 379.498C1565.84 379.288 1565.79 379.09 1565.7 378.903C1565.61 378.716 1565.47 378.564 1565.28 378.445C1565.08 378.327 1564.82 378.268 1564.49 378.268H1562.31V376.955ZM1575.26 377.693V378.992H1571.43V377.693H1575.26ZM1571.91 374.604V382H1570.26V374.604H1571.91ZM1576.45 374.604V382H1574.8V374.604H1576.45ZM1580.83 376.955H1583.01C1583.65 376.955 1584.19 377.062 1584.64 377.276C1585.09 377.491 1585.43 377.789 1585.66 378.172C1585.89 378.55 1586.01 378.983 1586.01 379.471C1586.01 379.831 1585.95 380.166 1585.81 380.476C1585.68 380.781 1585.49 381.048 1585.23 381.275C1584.97 381.503 1584.66 381.681 1584.28 381.809C1583.91 381.936 1583.49 382 1583.01 382H1579.74V374.604H1581.39V380.694H1583.01C1583.34 380.694 1583.6 380.637 1583.8 380.523C1583.99 380.41 1584.14 380.261 1584.22 380.079C1584.31 379.897 1584.36 379.703 1584.36 379.498C1584.36 379.288 1584.31 379.09 1584.22 378.903C1584.14 378.716 1583.99 378.564 1583.8 378.445C1583.6 378.327 1583.34 378.268 1583.01 378.268H1580.83V376.955ZM1588.93 374.604V382H1587.28V374.604H1588.93ZM1595.53 382.137C1594.99 382.137 1594.49 382.048 1594.05 381.87C1593.61 381.688 1593.24 381.435 1592.93 381.111C1592.62 380.788 1592.39 380.407 1592.23 379.97C1592.06 379.532 1591.98 379.061 1591.98 378.555V378.281C1591.98 377.702 1592.06 377.178 1592.23 376.709C1592.4 376.24 1592.64 375.839 1592.94 375.506C1593.24 375.169 1593.59 374.911 1594 374.733C1594.41 374.556 1594.86 374.467 1595.34 374.467C1595.86 374.467 1596.33 374.556 1596.72 374.733C1597.12 374.911 1597.45 375.162 1597.71 375.485C1597.97 375.804 1598.17 376.185 1598.3 376.627C1598.43 377.069 1598.49 377.557 1598.49 378.09V378.794H1592.78V377.611H1596.87V377.481C1596.86 377.185 1596.8 376.907 1596.69 376.647C1596.58 376.388 1596.42 376.178 1596.2 376.019C1595.99 375.859 1595.69 375.779 1595.33 375.779C1595.06 375.779 1594.81 375.839 1594.6 375.957C1594.39 376.071 1594.21 376.237 1594.07 376.456C1593.93 376.675 1593.82 376.939 1593.74 377.249C1593.67 377.554 1593.63 377.898 1593.63 378.281V378.555C1593.63 378.878 1593.68 379.179 1593.76 379.457C1593.85 379.73 1593.99 379.97 1594.16 380.175C1594.33 380.38 1594.54 380.542 1594.79 380.66C1595.04 380.774 1595.32 380.831 1595.63 380.831C1596.03 380.831 1596.38 380.751 1596.69 380.592C1597 380.432 1597.27 380.207 1597.5 379.915L1598.36 380.756C1598.2 380.988 1598 381.212 1597.74 381.426C1597.49 381.635 1597.17 381.806 1596.81 381.938C1596.44 382.071 1596.02 382.137 1595.53 382.137ZM1610.71 371.363H1612.04C1612.04 371.769 1611.98 372.104 1611.87 372.368C1611.76 372.628 1611.6 372.842 1611.38 373.011C1611.16 373.175 1610.9 373.307 1610.58 373.407C1610.26 373.507 1609.9 373.599 1609.48 373.681C1609.1 373.763 1608.75 373.893 1608.44 374.07C1608.14 374.243 1607.88 374.487 1607.67 374.802C1607.47 375.112 1607.32 375.51 1607.23 375.998C1607.14 376.486 1607.11 377.08 1607.15 377.782V378.247L1605.84 378.363V377.898C1605.84 377.028 1605.92 376.269 1606.08 375.622C1606.24 374.975 1606.46 374.43 1606.76 373.988C1607.05 373.542 1607.4 373.186 1607.81 372.922C1608.22 372.658 1608.67 372.475 1609.18 372.375C1609.52 372.302 1609.8 372.229 1610.03 372.156C1610.26 372.079 1610.43 371.981 1610.54 371.862C1610.65 371.739 1610.71 371.573 1610.71 371.363ZM1609.55 375.021C1610.04 375.021 1610.48 375.107 1610.86 375.28C1611.25 375.449 1611.57 375.686 1611.84 375.991C1612.1 376.297 1612.3 376.657 1612.44 377.071C1612.58 377.486 1612.65 377.937 1612.65 378.425V378.575C1612.65 379.086 1612.57 379.557 1612.42 379.99C1612.27 380.423 1612.05 380.801 1611.76 381.125C1611.47 381.444 1611.11 381.695 1610.69 381.877C1610.27 382.055 1609.79 382.144 1609.24 382.144C1608.71 382.144 1608.23 382.05 1607.8 381.863C1607.38 381.676 1607.02 381.417 1606.73 381.084C1606.44 380.747 1606.22 380.353 1606.07 379.901C1605.92 379.45 1605.84 378.958 1605.84 378.425V378.274C1605.84 378.179 1605.86 378.085 1605.92 377.994C1605.97 377.903 1606.05 377.805 1606.13 377.7C1606.21 377.595 1606.28 377.475 1606.35 377.338C1606.57 376.878 1606.84 376.474 1607.15 376.128C1607.46 375.782 1607.82 375.51 1608.21 375.314C1608.61 375.118 1609.06 375.021 1609.55 375.021ZM1609.23 376.326C1608.82 376.326 1608.49 376.424 1608.23 376.62C1607.97 376.812 1607.78 377.067 1607.66 377.386C1607.54 377.705 1607.48 378.051 1607.48 378.425V378.575C1607.48 378.881 1607.51 379.17 1607.58 379.443C1607.65 379.717 1607.75 379.958 1607.89 380.168C1608.03 380.373 1608.21 380.535 1608.44 380.653C1608.67 380.772 1608.93 380.831 1609.24 380.831C1609.56 380.831 1609.83 380.772 1610.04 380.653C1610.27 380.535 1610.45 380.373 1610.58 380.168C1610.73 379.958 1610.83 379.717 1610.89 379.443C1610.96 379.17 1610.99 378.881 1610.99 378.575V378.425C1610.99 378.142 1610.96 377.876 1610.89 377.625C1610.83 377.374 1610.73 377.153 1610.58 376.962C1610.44 376.766 1610.26 376.611 1610.04 376.497C1609.81 376.383 1609.55 376.326 1609.23 376.326ZM1619.51 380.517V376.989C1619.51 376.725 1619.46 376.497 1619.37 376.306C1619.27 376.114 1619.13 375.966 1618.93 375.861C1618.74 375.757 1618.5 375.704 1618.2 375.704C1617.94 375.704 1617.7 375.75 1617.51 375.841C1617.31 375.932 1617.16 376.055 1617.05 376.21C1616.94 376.365 1616.89 376.54 1616.89 376.736H1615.24C1615.24 376.445 1615.32 376.162 1615.46 375.889C1615.6 375.615 1615.8 375.371 1616.07 375.157C1616.34 374.943 1616.66 374.774 1617.04 374.651C1617.41 374.528 1617.83 374.467 1618.29 374.467C1618.85 374.467 1619.34 374.56 1619.77 374.747C1620.2 374.934 1620.54 375.216 1620.79 375.595C1621.04 375.968 1621.16 376.438 1621.16 377.003V380.291C1621.16 380.628 1621.19 380.931 1621.23 381.2C1621.28 381.465 1621.35 381.695 1621.45 381.891V382H1619.76C1619.68 381.822 1619.62 381.597 1619.57 381.323C1619.53 381.045 1619.51 380.776 1619.51 380.517ZM1619.75 377.502L1619.76 378.521H1618.58C1618.28 378.521 1618.01 378.55 1617.77 378.609C1617.54 378.664 1617.35 378.746 1617.19 378.855C1617.04 378.965 1616.92 379.097 1616.84 379.252C1616.77 379.407 1616.73 379.582 1616.73 379.778C1616.73 379.974 1616.77 380.154 1616.87 380.318C1616.96 380.478 1617.09 380.603 1617.26 380.694C1617.44 380.785 1617.65 380.831 1617.9 380.831C1618.24 380.831 1618.54 380.763 1618.79 380.626C1619.04 380.485 1619.24 380.314 1619.39 380.113C1619.53 379.908 1619.61 379.715 1619.62 379.532L1620.15 380.264C1620.1 380.451 1620.01 380.651 1619.87 380.865C1619.74 381.079 1619.57 381.285 1619.35 381.48C1619.14 381.672 1618.89 381.829 1618.59 381.952C1618.3 382.075 1617.97 382.137 1617.58 382.137C1617.1 382.137 1616.67 382.041 1616.29 381.85C1615.91 381.654 1615.62 381.392 1615.4 381.063C1615.19 380.731 1615.08 380.355 1615.08 379.936C1615.08 379.544 1615.15 379.197 1615.3 378.896C1615.45 378.591 1615.67 378.336 1615.96 378.131C1616.25 377.926 1616.6 377.771 1617.02 377.666C1617.44 377.557 1617.92 377.502 1618.46 377.502H1619.75ZM1627.31 380.824C1627.58 380.824 1627.82 380.772 1628.03 380.667C1628.25 380.558 1628.43 380.407 1628.56 380.216C1628.7 380.024 1628.77 379.803 1628.79 379.553H1630.34C1630.33 380.031 1630.19 380.466 1629.91 380.858C1629.64 381.25 1629.28 381.562 1628.83 381.795C1628.38 382.023 1627.88 382.137 1627.33 382.137C1626.76 382.137 1626.27 382.041 1625.85 381.85C1625.43 381.654 1625.09 381.385 1624.81 381.043C1624.53 380.701 1624.32 380.307 1624.18 379.86C1624.04 379.414 1623.97 378.935 1623.97 378.425V378.186C1623.97 377.675 1624.04 377.197 1624.18 376.75C1624.32 376.299 1624.53 375.902 1624.81 375.561C1625.09 375.219 1625.43 374.952 1625.85 374.761C1626.27 374.565 1626.76 374.467 1627.32 374.467C1627.92 374.467 1628.43 374.585 1628.88 374.822C1629.33 375.055 1629.68 375.381 1629.93 375.8C1630.19 376.215 1630.33 376.698 1630.34 377.249H1628.79C1628.77 376.976 1628.7 376.729 1628.58 376.511C1628.46 376.287 1628.29 376.11 1628.07 375.978C1627.86 375.845 1627.6 375.779 1627.3 375.779C1626.97 375.779 1626.69 375.848 1626.48 375.984C1626.26 376.117 1626.09 376.299 1625.96 376.531C1625.84 376.759 1625.75 377.017 1625.7 377.304C1625.65 377.586 1625.62 377.88 1625.62 378.186V378.425C1625.62 378.73 1625.65 379.026 1625.7 379.313C1625.75 379.601 1625.83 379.858 1625.96 380.086C1626.08 380.309 1626.26 380.489 1626.48 380.626C1626.69 380.758 1626.97 380.824 1627.31 380.824ZM1636.02 380.824C1636.29 380.824 1636.53 380.772 1636.75 380.667C1636.97 380.558 1637.14 380.407 1637.27 380.216C1637.41 380.024 1637.49 379.803 1637.5 379.553H1639.05C1639.04 380.031 1638.9 380.466 1638.63 380.858C1638.35 381.25 1637.99 381.562 1637.54 381.795C1637.09 382.023 1636.59 382.137 1636.04 382.137C1635.48 382.137 1634.99 382.041 1634.57 381.85C1634.15 381.654 1633.8 381.385 1633.52 381.043C1633.24 380.701 1633.03 380.307 1632.89 379.86C1632.76 379.414 1632.69 378.935 1632.69 378.425V378.186C1632.69 377.675 1632.76 377.197 1632.89 376.75C1633.03 376.299 1633.24 375.902 1633.52 375.561C1633.8 375.219 1634.15 374.952 1634.57 374.761C1634.99 374.565 1635.48 374.467 1636.04 374.467C1636.63 374.467 1637.15 374.585 1637.6 374.822C1638.04 375.055 1638.39 375.381 1638.65 375.8C1638.91 376.215 1639.04 376.698 1639.05 377.249H1637.5C1637.49 376.976 1637.42 376.729 1637.29 376.511C1637.18 376.287 1637.01 376.11 1636.79 375.978C1636.57 375.845 1636.32 375.779 1636.02 375.779C1635.68 375.779 1635.41 375.848 1635.19 375.984C1634.97 376.117 1634.8 376.299 1634.68 376.531C1634.55 376.759 1634.46 377.017 1634.41 377.304C1634.36 377.586 1634.33 377.88 1634.33 378.186V378.425C1634.33 378.73 1634.36 379.026 1634.41 379.313C1634.46 379.601 1634.55 379.858 1634.67 380.086C1634.8 380.309 1634.97 380.489 1635.19 380.626C1635.41 380.758 1635.69 380.824 1636.02 380.824ZM1644.98 382.137C1644.43 382.137 1643.94 382.048 1643.49 381.87C1643.06 381.688 1642.68 381.435 1642.37 381.111C1642.07 380.788 1641.83 380.407 1641.67 379.97C1641.5 379.532 1641.42 379.061 1641.42 378.555V378.281C1641.42 377.702 1641.51 377.178 1641.68 376.709C1641.84 376.24 1642.08 375.839 1642.38 375.506C1642.68 375.169 1643.04 374.911 1643.45 374.733C1643.86 374.556 1644.3 374.467 1644.78 374.467C1645.31 374.467 1645.77 374.556 1646.17 374.733C1646.56 374.911 1646.89 375.162 1647.15 375.485C1647.42 375.804 1647.61 376.185 1647.74 376.627C1647.87 377.069 1647.94 377.557 1647.94 378.09V378.794H1642.22V377.611H1646.31V377.481C1646.3 377.185 1646.24 376.907 1646.13 376.647C1646.03 376.388 1645.87 376.178 1645.65 376.019C1645.43 375.859 1645.14 375.779 1644.77 375.779C1644.5 375.779 1644.25 375.839 1644.04 375.957C1643.83 376.071 1643.66 376.237 1643.51 376.456C1643.37 376.675 1643.26 376.939 1643.19 377.249C1643.11 377.554 1643.08 377.898 1643.08 378.281V378.555C1643.08 378.878 1643.12 379.179 1643.21 379.457C1643.3 379.73 1643.43 379.97 1643.6 380.175C1643.78 380.38 1643.99 380.542 1644.23 380.66C1644.48 380.774 1644.76 380.831 1645.07 380.831C1645.47 380.831 1645.82 380.751 1646.13 380.592C1646.44 380.432 1646.71 380.207 1646.94 379.915L1647.81 380.756C1647.65 380.988 1647.44 381.212 1647.19 381.426C1646.93 381.635 1646.62 381.806 1646.25 381.938C1645.88 382.071 1645.46 382.137 1644.98 382.137ZM1652.32 379.594L1655.23 374.604H1656.88V382H1655.23V377.003L1652.32 382H1650.68V374.604H1652.32V379.594ZM1654.79 371.76H1656.02C1656.02 372.138 1655.92 372.473 1655.74 372.765C1655.56 373.052 1655.31 373.277 1654.98 373.441C1654.65 373.605 1654.26 373.688 1653.8 373.688C1653.11 373.688 1652.57 373.51 1652.17 373.154C1651.77 372.794 1651.57 372.329 1651.57 371.76H1652.8C1652.8 372.015 1652.87 372.241 1653.02 372.437C1653.18 372.628 1653.44 372.724 1653.8 372.724C1654.16 372.724 1654.42 372.628 1654.57 372.437C1654.72 372.241 1654.79 372.015 1654.79 371.76ZM1665.07 377.693V378.992H1661.24V377.693H1665.07ZM1661.72 374.604V382H1660.07V374.604H1661.72ZM1666.26 374.604V382H1664.61V374.604H1666.26ZM1670.64 376.955H1672.82C1673.46 376.955 1674 377.062 1674.45 377.276C1674.9 377.491 1675.24 377.789 1675.47 378.172C1675.71 378.55 1675.82 378.983 1675.82 379.471C1675.82 379.831 1675.76 380.166 1675.63 380.476C1675.49 380.781 1675.3 381.048 1675.04 381.275C1674.78 381.503 1674.47 381.681 1674.09 381.809C1673.73 381.936 1673.3 382 1672.82 382H1669.55V374.604H1671.2V380.694H1672.82C1673.15 380.694 1673.41 380.637 1673.61 380.523C1673.8 380.41 1673.95 380.261 1674.03 380.079C1674.12 379.897 1674.17 379.703 1674.17 379.498C1674.17 379.288 1674.12 379.09 1674.03 378.903C1673.95 378.716 1673.8 378.564 1673.61 378.445C1673.41 378.327 1673.15 378.268 1672.82 378.268H1670.64V376.955ZM1678.74 374.604V382H1677.09V374.604H1678.74Z" fill="black"/>
        </Fragment>
    );
};