import React, { Fragment } from 'react'

export const Cleaning2 = (props) => {
    const {isActive} = props

    return (
        <Fragment>
            <rect x="131" y="100" width="1658.25" height="737" fill="url(#pattern11)"
                style={{opacity: isActive ? 1 : 0}}
            />

            <circle cx="1325" cy="614" r="4" fill="white" style={{opacity: isActive ? 1 : 0}}/>

            <path d="M1327.32 617L1381.15 719" stroke="white" style={{opacity: isActive ? 1 : 0}}/>

        <path d="M1542.5 719.5L1381.15 719.5" stroke="white" style={{opacity: isActive ? 1 : 0}}/>

        <path style={{opacity: isActive ? 1 : 0}} d="M1383.75 732.047V742H1382.05V732.047H1383.75ZM1389.74 732.047L1385.7 737.721H1383.27L1383.04 736.23H1384.75L1387.64 732.047H1389.74ZM1387.99 742L1384.77 737.461L1385.88 736.142L1390.05 742H1387.99ZM1391.77 738.384V738.227C1391.77 737.693 1391.84 737.199 1392 736.743C1392.15 736.283 1392.38 735.884 1392.67 735.547C1392.96 735.205 1393.32 734.941 1393.75 734.754C1394.18 734.562 1394.66 734.467 1395.2 734.467C1395.74 734.467 1396.22 734.562 1396.65 734.754C1397.07 734.941 1397.44 735.205 1397.73 735.547C1398.03 735.884 1398.25 736.283 1398.41 736.743C1398.56 737.199 1398.64 737.693 1398.64 738.227V738.384C1398.64 738.917 1398.56 739.411 1398.41 739.867C1398.25 740.323 1398.03 740.722 1397.73 741.063C1397.44 741.401 1397.08 741.665 1396.65 741.856C1396.23 742.043 1395.75 742.137 1395.21 742.137C1394.67 742.137 1394.18 742.043 1393.75 741.856C1393.33 741.665 1392.97 741.401 1392.67 741.063C1392.38 740.722 1392.15 740.323 1392 739.867C1391.84 739.411 1391.77 738.917 1391.77 738.384ZM1393.41 738.227V738.384C1393.41 738.716 1393.45 739.031 1393.52 739.327C1393.58 739.623 1393.69 739.883 1393.84 740.106C1393.98 740.33 1394.17 740.505 1394.4 740.633C1394.62 740.76 1394.9 740.824 1395.21 740.824C1395.52 740.824 1395.78 740.76 1396 740.633C1396.23 740.505 1396.42 740.33 1396.56 740.106C1396.71 739.883 1396.82 739.623 1396.89 739.327C1396.96 739.031 1396.99 738.716 1396.99 738.384V738.227C1396.99 737.898 1396.96 737.589 1396.89 737.297C1396.82 737.001 1396.71 736.739 1396.56 736.511C1396.41 736.283 1396.22 736.105 1396 735.978C1395.77 735.845 1395.51 735.779 1395.2 735.779C1394.89 735.779 1394.62 735.845 1394.39 735.978C1394.17 736.105 1393.98 736.283 1393.84 736.511C1393.69 736.739 1393.58 737.001 1393.52 737.297C1393.45 737.589 1393.41 737.898 1393.41 738.227ZM1405.82 740.004L1408.02 734.604H1409.45L1406.38 742H1405.26L1402.2 734.604H1403.62L1405.82 740.004ZM1403.2 734.604V742H1401.55V734.604H1403.2ZM1408.44 742V734.604H1410.09V742H1408.44ZM1418.3 734.604V735.916H1414.65V734.604H1418.3ZM1415.04 734.604V742H1413.39V734.604H1415.04ZM1419.59 734.604V742H1417.94V734.604H1419.59ZM1427.7 734.604V735.916H1424.1V734.604H1427.7ZM1429 734.604V742H1427.35V734.604H1429ZM1423.69 734.604H1425.32L1425.12 738.261C1425.09 738.803 1425.04 739.282 1424.96 739.696C1424.88 740.106 1424.77 740.46 1424.64 740.756C1424.51 741.048 1424.35 741.285 1424.16 741.467C1423.97 741.649 1423.74 741.784 1423.49 741.87C1423.23 741.957 1422.94 742 1422.63 742H1422.11L1422.11 740.646L1422.37 740.626C1422.53 740.612 1422.68 740.569 1422.8 740.496C1422.93 740.419 1423.03 740.309 1423.12 740.168C1423.21 740.027 1423.28 739.844 1423.34 739.621C1423.4 739.398 1423.44 739.133 1423.47 738.828C1423.51 738.523 1423.54 738.167 1423.56 737.762L1423.69 734.604ZM1435.41 742.137C1434.86 742.137 1434.37 742.048 1433.92 741.87C1433.49 741.688 1433.11 741.435 1432.8 741.111C1432.5 740.788 1432.26 740.407 1432.1 739.97C1431.93 739.532 1431.85 739.061 1431.85 738.555V738.281C1431.85 737.702 1431.94 737.178 1432.11 736.709C1432.27 736.24 1432.51 735.839 1432.81 735.506C1433.11 735.169 1433.47 734.911 1433.88 734.733C1434.29 734.556 1434.73 734.467 1435.21 734.467C1435.74 734.467 1436.2 734.556 1436.6 734.733C1436.99 734.911 1437.32 735.162 1437.58 735.485C1437.85 735.804 1438.04 736.185 1438.17 736.627C1438.3 737.069 1438.37 737.557 1438.37 738.09V738.794H1432.65V737.611H1436.74V737.481C1436.73 737.185 1436.67 736.907 1436.56 736.647C1436.46 736.388 1436.3 736.178 1436.08 736.019C1435.86 735.859 1435.57 735.779 1435.2 735.779C1434.93 735.779 1434.68 735.839 1434.47 735.957C1434.26 736.071 1434.09 736.237 1433.94 736.456C1433.8 736.675 1433.69 736.939 1433.62 737.249C1433.54 737.554 1433.51 737.898 1433.51 738.281V738.555C1433.51 738.878 1433.55 739.179 1433.64 739.457C1433.73 739.73 1433.86 739.97 1434.03 740.175C1434.21 740.38 1434.42 740.542 1434.66 740.66C1434.91 740.774 1435.19 740.831 1435.5 740.831C1435.9 740.831 1436.25 740.751 1436.56 740.592C1436.87 740.432 1437.14 740.207 1437.37 739.915L1438.24 740.756C1438.08 740.988 1437.87 741.212 1437.62 741.426C1437.36 741.635 1437.05 741.806 1436.68 741.938C1436.31 742.071 1435.89 742.137 1435.41 742.137ZM1442.83 734.604V742H1441.18V734.604H1442.83ZM1447.66 734.604L1444.33 739.054H1442.45L1442.23 737.563H1443.6L1445.6 734.604H1447.66ZM1445.73 742L1443.5 738.773L1444.8 737.837L1447.9 742H1445.73ZM1453.1 740.824C1453.37 740.824 1453.61 740.772 1453.83 740.667C1454.05 740.558 1454.22 740.407 1454.35 740.216C1454.49 740.024 1454.57 739.803 1454.58 739.553H1456.13C1456.12 740.031 1455.98 740.466 1455.71 740.858C1455.43 741.25 1455.07 741.562 1454.62 741.795C1454.17 742.023 1453.67 742.137 1453.12 742.137C1452.56 742.137 1452.07 742.041 1451.65 741.85C1451.23 741.654 1450.88 741.385 1450.6 741.043C1450.32 740.701 1450.11 740.307 1449.97 739.86C1449.84 739.414 1449.77 738.935 1449.77 738.425V738.186C1449.77 737.675 1449.84 737.197 1449.97 736.75C1450.11 736.299 1450.32 735.902 1450.6 735.561C1450.88 735.219 1451.23 734.952 1451.65 734.761C1452.07 734.565 1452.56 734.467 1453.12 734.467C1453.71 734.467 1454.23 734.585 1454.68 734.822C1455.12 735.055 1455.47 735.381 1455.73 735.8C1455.99 736.215 1456.12 736.698 1456.13 737.249H1454.58C1454.57 736.976 1454.5 736.729 1454.37 736.511C1454.26 736.287 1454.09 736.11 1453.87 735.978C1453.65 735.845 1453.4 735.779 1453.1 735.779C1452.76 735.779 1452.49 735.848 1452.27 735.984C1452.05 736.117 1451.88 736.299 1451.76 736.531C1451.63 736.759 1451.54 737.017 1451.49 737.304C1451.44 737.586 1451.41 737.88 1451.41 738.186V738.425C1451.41 738.73 1451.44 739.026 1451.49 739.313C1451.54 739.601 1451.63 739.858 1451.75 740.086C1451.88 740.309 1452.05 740.489 1452.27 740.626C1452.49 740.758 1452.77 740.824 1453.1 740.824ZM1463.37 738.384V738.227C1463.37 737.693 1463.45 737.199 1463.6 736.743C1463.75 736.283 1463.98 735.884 1464.27 735.547C1464.57 735.205 1464.93 734.941 1465.35 734.754C1465.78 734.562 1466.26 734.467 1466.8 734.467C1467.34 734.467 1467.82 734.562 1468.25 734.754C1468.68 734.941 1469.04 735.205 1469.34 735.547C1469.63 735.884 1469.86 736.283 1470.01 736.743C1470.17 737.199 1470.24 737.693 1470.24 738.227V738.384C1470.24 738.917 1470.17 739.411 1470.01 739.867C1469.86 740.323 1469.63 740.722 1469.34 741.063C1469.04 741.401 1468.68 741.665 1468.26 741.856C1467.83 742.043 1467.35 742.137 1466.81 742.137C1466.27 742.137 1465.79 742.043 1465.36 741.856C1464.93 741.665 1464.57 741.401 1464.28 741.063C1463.98 740.722 1463.75 740.323 1463.6 739.867C1463.45 739.411 1463.37 738.917 1463.37 738.384ZM1465.02 738.227V738.384C1465.02 738.716 1465.05 739.031 1465.12 739.327C1465.19 739.623 1465.29 739.883 1465.44 740.106C1465.58 740.33 1465.77 740.505 1466 740.633C1466.23 740.76 1466.5 740.824 1466.81 740.824C1467.12 740.824 1467.38 740.76 1467.61 740.633C1467.83 740.505 1468.02 740.33 1468.17 740.106C1468.31 739.883 1468.42 739.623 1468.49 739.327C1468.56 739.031 1468.6 738.716 1468.6 738.384V738.227C1468.6 737.898 1468.56 737.589 1468.49 737.297C1468.42 737.001 1468.31 736.739 1468.16 736.511C1468.01 736.283 1467.83 736.105 1467.6 735.978C1467.38 735.845 1467.11 735.779 1466.8 735.779C1466.49 735.779 1466.22 735.845 1465.99 735.978C1465.77 736.105 1465.58 736.283 1465.44 736.511C1465.29 736.739 1465.19 737.001 1465.12 737.297C1465.05 737.589 1465.02 737.898 1465.02 738.227ZM1478.97 734.604V742H1477.32V734.604H1478.97ZM1478.27 737.878V739.184C1478.07 739.27 1477.84 739.35 1477.59 739.423C1477.35 739.491 1477.09 739.548 1476.81 739.594C1476.54 739.635 1476.26 739.655 1475.99 739.655C1475.33 739.655 1474.77 739.555 1474.3 739.354C1473.83 739.154 1473.47 738.846 1473.21 738.432C1472.96 738.012 1472.83 737.481 1472.83 736.839V734.597H1474.47V736.839C1474.47 737.208 1474.53 737.502 1474.64 737.721C1474.75 737.939 1474.92 738.097 1475.14 738.192C1475.37 738.288 1475.65 738.336 1475.99 738.336C1476.27 738.336 1476.53 738.318 1476.79 738.281C1477.04 738.24 1477.28 738.186 1477.53 738.117C1477.78 738.049 1478.02 737.969 1478.27 737.878ZM1483.82 739.594L1486.73 734.604H1488.38V742H1486.73V737.003L1483.82 742H1482.18V734.604H1483.82V739.594ZM1494.54 740.824C1494.81 740.824 1495.05 740.772 1495.27 740.667C1495.49 740.558 1495.66 740.407 1495.79 740.216C1495.93 740.024 1496.01 739.803 1496.02 739.553H1497.57C1497.56 740.031 1497.42 740.466 1497.15 740.858C1496.87 741.25 1496.51 741.562 1496.06 741.795C1495.61 742.023 1495.11 742.137 1494.56 742.137C1494 742.137 1493.51 742.041 1493.09 741.85C1492.67 741.654 1492.32 741.385 1492.04 741.043C1491.76 740.701 1491.55 740.307 1491.41 739.86C1491.27 739.414 1491.21 738.935 1491.21 738.425V738.186C1491.21 737.675 1491.27 737.197 1491.41 736.75C1491.55 736.299 1491.76 735.902 1492.04 735.561C1492.32 735.219 1492.67 734.952 1493.09 734.761C1493.51 734.565 1494 734.467 1494.56 734.467C1495.15 734.467 1495.67 734.585 1496.11 734.822C1496.56 735.055 1496.91 735.381 1497.17 735.8C1497.43 736.215 1497.56 736.698 1497.57 737.249H1496.02C1496.01 736.976 1495.94 736.729 1495.81 736.511C1495.7 736.287 1495.53 736.11 1495.31 735.978C1495.09 735.845 1494.84 735.779 1494.54 735.779C1494.2 735.779 1493.93 735.848 1493.71 735.984C1493.49 736.117 1493.32 736.299 1493.2 736.531C1493.07 736.759 1492.98 737.017 1492.93 737.304C1492.88 737.586 1492.85 737.88 1492.85 738.186V738.425C1492.85 738.73 1492.88 739.026 1492.93 739.313C1492.98 739.601 1493.07 739.858 1493.19 740.086C1493.32 740.309 1493.49 740.489 1493.71 740.626C1493.93 740.758 1494.2 740.824 1494.54 740.824ZM1503.67 734.604V742H1502.01V734.604H1503.67ZM1506.09 734.604V735.902H1499.63V734.604H1506.09ZM1513.65 737.693V738.992H1509.82V737.693H1513.65ZM1510.3 734.604V742H1508.65V734.604H1510.3ZM1514.84 734.604V742H1513.19V734.604H1514.84ZM1519.22 736.955H1521.4C1522.03 736.955 1522.58 737.062 1523.02 737.276C1523.47 737.491 1523.81 737.789 1524.04 738.172C1524.28 738.55 1524.4 738.983 1524.4 739.471C1524.4 739.831 1524.33 740.166 1524.2 740.476C1524.07 740.781 1523.87 741.048 1523.61 741.275C1523.36 741.503 1523.04 741.681 1522.67 741.809C1522.3 741.936 1521.88 742 1521.4 742H1518.12V734.604H1519.78V740.694H1521.4C1521.72 740.694 1521.99 740.637 1522.18 740.523C1522.38 740.41 1522.52 740.261 1522.61 740.079C1522.7 739.897 1522.74 739.703 1522.74 739.498C1522.74 739.288 1522.7 739.09 1522.61 738.903C1522.52 738.716 1522.38 738.564 1522.18 738.445C1521.99 738.327 1521.72 738.268 1521.4 738.268H1519.22V736.955ZM1527.31 734.604V742H1525.66V734.604H1527.31ZM1531.92 734.604L1533.32 737.058L1534.76 734.604H1536.57L1534.33 738.233L1536.66 742H1534.85L1533.34 739.443L1531.84 742H1530.02L1532.35 738.233L1530.11 734.604H1531.92ZM1384.87 756.824C1385.14 756.824 1385.38 756.772 1385.59 756.667C1385.81 756.558 1385.99 756.407 1386.12 756.216C1386.26 756.024 1386.33 755.803 1386.35 755.553H1387.9C1387.89 756.031 1387.75 756.466 1387.47 756.858C1387.2 757.25 1386.84 757.562 1386.39 757.795C1385.94 758.023 1385.44 758.137 1384.89 758.137C1384.32 758.137 1383.83 758.041 1383.41 757.85C1382.99 757.654 1382.65 757.385 1382.37 757.043C1382.09 756.701 1381.88 756.307 1381.74 755.86C1381.6 755.414 1381.53 754.935 1381.53 754.425V754.186C1381.53 753.675 1381.6 753.197 1381.74 752.75C1381.88 752.299 1382.09 751.902 1382.37 751.561C1382.65 751.219 1382.99 750.952 1383.41 750.761C1383.83 750.565 1384.32 750.467 1384.88 750.467C1385.48 750.467 1385.99 750.585 1386.44 750.822C1386.89 751.055 1387.24 751.381 1387.49 751.8C1387.75 752.215 1387.89 752.698 1387.9 753.249H1386.35C1386.33 752.976 1386.26 752.729 1386.14 752.511C1386.02 752.287 1385.85 752.11 1385.63 751.978C1385.42 751.845 1385.16 751.779 1384.86 751.779C1384.53 751.779 1384.25 751.848 1384.04 751.984C1383.82 752.117 1383.65 752.299 1383.52 752.531C1383.4 752.759 1383.31 753.017 1383.26 753.304C1383.21 753.586 1383.18 753.88 1383.18 754.186V754.425C1383.18 754.73 1383.21 755.026 1383.26 755.313C1383.31 755.601 1383.39 755.858 1383.52 756.086C1383.64 756.309 1383.82 756.489 1384.04 756.626C1384.25 756.758 1384.53 756.824 1384.87 756.824ZM1390.25 754.384V754.227C1390.25 753.693 1390.33 753.199 1390.48 752.743C1390.64 752.283 1390.86 751.884 1391.15 751.547C1391.45 751.205 1391.81 750.941 1392.23 750.754C1392.66 750.562 1393.14 750.467 1393.68 750.467C1394.22 750.467 1394.7 750.562 1395.13 750.754C1395.56 750.941 1395.92 751.205 1396.22 751.547C1396.51 751.884 1396.74 752.283 1396.89 752.743C1397.05 753.199 1397.12 753.693 1397.12 754.227V754.384C1397.12 754.917 1397.05 755.411 1396.89 755.867C1396.74 756.323 1396.51 756.722 1396.22 757.063C1395.92 757.401 1395.56 757.665 1395.14 757.856C1394.71 758.043 1394.23 758.137 1393.69 758.137C1393.15 758.137 1392.67 758.043 1392.24 757.856C1391.81 757.665 1391.45 757.401 1391.16 757.063C1390.86 756.722 1390.64 756.323 1390.48 755.867C1390.33 755.411 1390.25 754.917 1390.25 754.384ZM1391.9 754.227V754.384C1391.9 754.716 1391.93 755.031 1392 755.327C1392.07 755.623 1392.17 755.883 1392.32 756.106C1392.46 756.33 1392.65 756.505 1392.88 756.633C1393.11 756.76 1393.38 756.824 1393.69 756.824C1394 756.824 1394.26 756.76 1394.49 756.633C1394.71 756.505 1394.9 756.33 1395.05 756.106C1395.19 755.883 1395.3 755.623 1395.37 755.327C1395.44 755.031 1395.48 754.716 1395.48 754.384V754.227C1395.48 753.898 1395.44 753.589 1395.37 753.297C1395.3 753.001 1395.19 752.739 1395.04 752.511C1394.89 752.283 1394.71 752.105 1394.48 751.978C1394.26 751.845 1393.99 751.779 1393.68 751.779C1393.37 751.779 1393.1 751.845 1392.87 751.978C1392.65 752.105 1392.46 752.283 1392.32 752.511C1392.17 752.739 1392.07 753.001 1392 753.297C1391.93 753.589 1391.9 753.898 1391.9 754.227ZM1399.59 754.384V754.227C1399.59 753.693 1399.67 753.199 1399.82 752.743C1399.98 752.283 1400.2 751.884 1400.49 751.547C1400.79 751.205 1401.15 750.941 1401.57 750.754C1402 750.562 1402.48 750.467 1403.02 750.467C1403.56 750.467 1404.05 750.562 1404.47 750.754C1404.9 750.941 1405.26 751.205 1405.56 751.547C1405.86 751.884 1406.08 752.283 1406.24 752.743C1406.39 753.199 1406.47 753.693 1406.47 754.227V754.384C1406.47 754.917 1406.39 755.411 1406.24 755.867C1406.08 756.323 1405.86 756.722 1405.56 757.063C1405.26 757.401 1404.9 757.665 1404.48 757.856C1404.05 758.043 1403.57 758.137 1403.04 758.137C1402.49 758.137 1402.01 758.043 1401.58 757.856C1401.16 757.665 1400.8 757.401 1400.5 757.063C1400.2 756.722 1399.98 756.323 1399.82 755.867C1399.67 755.411 1399.59 754.917 1399.59 754.384ZM1401.24 754.227V754.384C1401.24 754.716 1401.27 755.031 1401.34 755.327C1401.41 755.623 1401.52 755.883 1401.66 756.106C1401.81 756.33 1401.99 756.505 1402.22 756.633C1402.45 756.76 1402.72 756.824 1403.04 756.824C1403.34 756.824 1403.61 756.76 1403.83 756.633C1404.06 756.505 1404.24 756.33 1404.39 756.106C1404.54 755.883 1404.64 755.623 1404.71 755.327C1404.78 755.031 1404.82 754.716 1404.82 754.384V754.227C1404.82 753.898 1404.78 753.589 1404.71 753.297C1404.64 753.001 1404.53 752.739 1404.38 752.511C1404.24 752.283 1404.05 752.105 1403.82 751.978C1403.6 751.845 1403.33 751.779 1403.02 751.779C1402.71 751.779 1402.44 751.845 1402.22 751.978C1401.99 752.105 1401.81 752.283 1401.66 752.511C1401.52 752.739 1401.41 753.001 1401.34 753.297C1401.27 753.589 1401.24 753.898 1401.24 754.227ZM1410.9 752.025V760.844H1409.26V750.604H1410.77L1410.9 752.025ZM1415.72 754.233V754.377C1415.72 754.915 1415.66 755.414 1415.53 755.874C1415.41 756.33 1415.22 756.729 1414.98 757.07C1414.74 757.408 1414.44 757.67 1414.08 757.856C1413.73 758.043 1413.32 758.137 1412.85 758.137C1412.39 758.137 1411.99 758.052 1411.64 757.884C1411.3 757.711 1411.01 757.467 1410.77 757.152C1410.54 756.838 1410.34 756.469 1410.2 756.045C1410.06 755.617 1409.96 755.147 1409.9 754.637V754.083C1409.96 753.541 1410.06 753.049 1410.2 752.606C1410.34 752.164 1410.54 751.784 1410.77 751.465C1411.01 751.146 1411.3 750.9 1411.64 750.727C1411.98 750.553 1412.38 750.467 1412.84 750.467C1413.3 750.467 1413.71 750.558 1414.08 750.74C1414.44 750.918 1414.74 751.173 1414.98 751.506C1415.23 751.834 1415.41 752.23 1415.54 752.695C1415.66 753.156 1415.72 753.668 1415.72 754.233ZM1414.08 754.377V754.233C1414.08 753.892 1414.04 753.575 1413.98 753.283C1413.92 752.987 1413.82 752.727 1413.68 752.504C1413.54 752.281 1413.37 752.107 1413.15 751.984C1412.94 751.857 1412.69 751.793 1412.39 751.793C1412.1 751.793 1411.85 751.843 1411.64 751.943C1411.43 752.039 1411.26 752.174 1411.12 752.347C1410.97 752.52 1410.86 752.723 1410.79 752.955C1410.71 753.183 1410.65 753.431 1410.62 753.7V755.026C1410.68 755.354 1410.77 755.655 1410.9 755.929C1411.04 756.202 1411.22 756.421 1411.46 756.585C1411.71 756.744 1412.02 756.824 1412.41 756.824C1412.7 756.824 1412.96 756.76 1413.17 756.633C1413.38 756.505 1413.55 756.33 1413.68 756.106C1413.82 755.879 1413.92 755.617 1413.98 755.32C1414.04 755.024 1414.08 754.71 1414.08 754.377ZM1420.59 757.193L1422.6 750.604H1424.36L1421.39 759.128C1421.33 759.31 1421.24 759.508 1421.13 759.723C1421.02 759.937 1420.88 760.14 1420.7 760.331C1420.52 760.527 1420.31 760.684 1420.05 760.803C1419.79 760.926 1419.47 760.987 1419.1 760.987C1418.96 760.987 1418.82 760.974 1418.68 760.946C1418.55 760.924 1418.42 760.898 1418.31 760.871L1418.3 759.613C1418.34 759.618 1418.4 759.622 1418.46 759.627C1418.53 759.632 1418.59 759.634 1418.63 759.634C1418.9 759.634 1419.13 759.6 1419.31 759.531C1419.49 759.467 1419.64 759.363 1419.75 759.217C1419.87 759.071 1419.97 758.875 1420.06 758.629L1420.59 757.193ZM1419.45 750.604L1421.21 756.141L1421.5 757.877L1420.36 758.171L1417.68 750.604H1419.45ZM1429.16 755.013L1426.21 750.604H1428.23L1429.95 753.516H1431.39L1431.18 755.013H1429.16ZM1429.99 754.773L1428.1 758H1426.08L1428.76 753.837L1429.99 754.773ZM1432.39 750.604V758H1430.75V750.604H1432.39ZM1436.95 750.604L1433.99 755.013H1431.96L1431.74 753.516H1433.19L1434.92 750.604H1436.95ZM1435.04 758L1433.14 754.773L1434.42 753.837L1437.09 758H1435.04ZM1442.66 758.137C1442.11 758.137 1441.62 758.048 1441.18 757.87C1440.74 757.688 1440.36 757.435 1440.05 757.111C1439.75 756.788 1439.51 756.407 1439.35 755.97C1439.19 755.532 1439.1 755.061 1439.1 754.555V754.281C1439.1 753.702 1439.19 753.178 1439.36 752.709C1439.53 752.24 1439.76 751.839 1440.06 751.506C1440.36 751.169 1440.72 750.911 1441.13 750.733C1441.54 750.556 1441.98 750.467 1442.46 750.467C1442.99 750.467 1443.45 750.556 1443.85 750.733C1444.24 750.911 1444.57 751.162 1444.83 751.485C1445.1 751.804 1445.29 752.185 1445.42 752.627C1445.55 753.069 1445.62 753.557 1445.62 754.09V754.794H1439.9V753.611H1443.99V753.481C1443.98 753.185 1443.92 752.907 1443.81 752.647C1443.71 752.388 1443.55 752.178 1443.33 752.019C1443.11 751.859 1442.82 751.779 1442.45 751.779C1442.18 751.779 1441.94 751.839 1441.72 751.957C1441.51 752.071 1441.34 752.237 1441.2 752.456C1441.05 752.675 1440.95 752.939 1440.87 753.249C1440.79 753.554 1440.76 753.898 1440.76 754.281V754.555C1440.76 754.878 1440.8 755.179 1440.89 755.457C1440.98 755.73 1441.11 755.97 1441.28 756.175C1441.46 756.38 1441.67 756.542 1441.91 756.66C1442.16 756.774 1442.44 756.831 1442.75 756.831C1443.15 756.831 1443.5 756.751 1443.81 756.592C1444.12 756.432 1444.39 756.207 1444.62 755.915L1445.49 756.756C1445.33 756.988 1445.12 757.212 1444.87 757.426C1444.61 757.635 1444.3 757.806 1443.93 757.938C1443.57 758.071 1443.14 758.137 1442.66 758.137ZM1453.36 753.693V754.992H1449.53V753.693H1453.36ZM1450.01 750.604V758H1448.36V750.604H1450.01ZM1454.55 750.604V758H1452.9V750.604H1454.55ZM1459.4 755.594L1462.31 750.604H1463.96V758H1462.31V753.003L1459.4 758H1457.76V750.604H1459.4V755.594ZM1468.8 755.594L1471.71 750.604H1473.35V758H1471.71V753.003L1468.8 758H1467.15V750.604H1468.8V755.594ZM1471.27 747.76H1472.49C1472.49 748.138 1472.4 748.473 1472.22 748.765C1472.04 749.052 1471.79 749.277 1471.45 749.441C1471.13 749.605 1470.73 749.688 1470.28 749.688C1469.59 749.688 1469.05 749.51 1468.64 749.154C1468.25 748.794 1468.05 748.329 1468.05 747.76H1469.27C1469.27 748.015 1469.35 748.241 1469.5 748.437C1469.65 748.628 1469.91 748.724 1470.28 748.724C1470.64 748.724 1470.89 748.628 1471.04 748.437C1471.19 748.241 1471.27 748.015 1471.27 747.76Z" fill="white"/>
        </Fragment>
    );
};