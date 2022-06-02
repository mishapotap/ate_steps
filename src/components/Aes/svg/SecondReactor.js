import React, { Fragment, useMemo } from 'react'

export const SecondReactor = (props) => {
    const {isActive, step} = props
    const isHighlighted = useMemo(() => {
        return step === 'a0'
        || step === 'a1'
        || step === 'g0'
        || step === 'g1'
        || step === 'g2';
    }, [step]);

    return (
        <Fragment>
            <rect x="131" y="100" width="1658.25" height="737" fill="url(#pattern4)"
                style={{opacity: (isHighlighted && isActive) || !isHighlighted ? 1 : 0}}
            />

            <circle cx="1211" cy="354" r="4" fill="white" style={{opacity: isHighlighted ? 1 : 0}}/>

            <path d="M1211.47 351L1248.14 298" stroke="#263973" style={{opacity: isHighlighted ? 1 : 0}}/>

            <path d="M1547 297L1248.14 297" stroke="#263973" style={{opacity: isHighlighted ? 1 : 0}}/>

        <path style={{opacity: isHighlighted ? 1 : 0}} d="M1254.74 281.502H1252.21L1252.19 280.251H1254.41C1254.78 280.251 1255.1 280.196 1255.36 280.087C1255.62 279.973 1255.82 279.811 1255.96 279.602C1256.1 279.387 1256.17 279.13 1256.17 278.829C1256.17 278.496 1256.1 278.225 1255.97 278.016C1255.85 277.806 1255.65 277.653 1255.39 277.558C1255.13 277.462 1254.79 277.414 1254.39 277.414H1252.73V286H1251.01V276.047H1254.39C1254.94 276.047 1255.42 276.099 1255.85 276.204C1256.28 276.309 1256.65 276.473 1256.95 276.696C1257.26 276.915 1257.49 277.193 1257.64 277.53C1257.8 277.868 1257.88 278.269 1257.88 278.733C1257.88 279.144 1257.78 279.52 1257.59 279.861C1257.39 280.199 1257.1 280.474 1256.72 280.688C1256.34 280.903 1255.86 281.03 1255.29 281.071L1254.74 281.502ZM1254.67 286H1251.67L1252.44 284.64H1254.67C1255.06 284.64 1255.38 284.576 1255.64 284.448C1255.9 284.316 1256.09 284.136 1256.22 283.908C1256.35 283.676 1256.42 283.405 1256.42 283.095C1256.42 282.771 1256.36 282.491 1256.25 282.254C1256.13 282.012 1255.95 281.828 1255.71 281.7C1255.46 281.568 1255.14 281.502 1254.74 281.502H1252.82L1252.83 280.251H1255.34L1255.73 280.723C1256.28 280.741 1256.72 280.862 1257.08 281.085C1257.43 281.308 1257.69 281.598 1257.87 281.953C1258.04 282.309 1258.13 282.691 1258.13 283.102C1258.13 283.735 1257.99 284.266 1257.71 284.694C1257.44 285.123 1257.04 285.449 1256.53 285.672C1256.01 285.891 1255.39 286 1254.67 286ZM1264.11 284.824C1264.38 284.824 1264.63 284.772 1264.84 284.667C1265.06 284.558 1265.23 284.407 1265.37 284.216C1265.5 284.024 1265.58 283.803 1265.59 283.553H1267.14C1267.13 284.031 1266.99 284.466 1266.72 284.858C1266.45 285.25 1266.08 285.562 1265.63 285.795C1265.18 286.023 1264.68 286.137 1264.14 286.137C1263.57 286.137 1263.08 286.041 1262.66 285.85C1262.24 285.654 1261.89 285.385 1261.61 285.043C1261.33 284.701 1261.13 284.307 1260.98 283.86C1260.85 283.414 1260.78 282.935 1260.78 282.425V282.186C1260.78 281.675 1260.85 281.197 1260.98 280.75C1261.13 280.299 1261.33 279.902 1261.61 279.561C1261.89 279.219 1262.24 278.952 1262.66 278.761C1263.08 278.565 1263.57 278.467 1264.13 278.467C1264.72 278.467 1265.24 278.585 1265.69 278.822C1266.13 279.055 1266.48 279.381 1266.74 279.8C1267 280.215 1267.13 280.698 1267.14 281.249H1265.59C1265.58 280.976 1265.51 280.729 1265.39 280.511C1265.27 280.287 1265.1 280.11 1264.88 279.978C1264.67 279.845 1264.41 279.779 1264.11 279.779C1263.78 279.779 1263.5 279.848 1263.28 279.984C1263.06 280.117 1262.89 280.299 1262.77 280.531C1262.65 280.759 1262.56 281.017 1262.5 281.304C1262.45 281.586 1262.43 281.88 1262.43 282.186V282.425C1262.43 282.73 1262.45 283.026 1262.5 283.313C1262.55 283.601 1262.64 283.858 1262.76 284.086C1262.89 284.309 1263.06 284.489 1263.28 284.626C1263.5 284.758 1263.78 284.824 1264.11 284.824ZM1274.77 278.604V279.916H1271.12V278.604H1274.77ZM1271.51 278.604V286H1269.86V278.604H1271.51ZM1276.06 278.604V286H1274.41V278.604H1276.06ZM1278.89 282.384V282.227C1278.89 281.693 1278.97 281.199 1279.12 280.743C1279.28 280.283 1279.5 279.884 1279.79 279.547C1280.09 279.205 1280.45 278.941 1280.87 278.754C1281.3 278.562 1281.79 278.467 1282.32 278.467C1282.87 278.467 1283.35 278.562 1283.77 278.754C1284.2 278.941 1284.56 279.205 1284.86 279.547C1285.16 279.884 1285.38 280.283 1285.54 280.743C1285.69 281.199 1285.77 281.693 1285.77 282.227V282.384C1285.77 282.917 1285.69 283.411 1285.54 283.867C1285.38 284.323 1285.16 284.722 1284.86 285.063C1284.56 285.401 1284.2 285.665 1283.78 285.856C1283.36 286.043 1282.87 286.137 1282.34 286.137C1281.79 286.137 1281.31 286.043 1280.88 285.856C1280.46 285.665 1280.1 285.401 1279.8 285.063C1279.5 284.722 1279.28 284.323 1279.12 283.867C1278.97 283.411 1278.89 282.917 1278.89 282.384ZM1280.54 282.227V282.384C1280.54 282.716 1280.57 283.031 1280.64 283.327C1280.71 283.623 1280.82 283.883 1280.96 284.106C1281.11 284.33 1281.3 284.505 1281.52 284.633C1281.75 284.76 1282.02 284.824 1282.34 284.824C1282.64 284.824 1282.91 284.76 1283.13 284.633C1283.36 284.505 1283.54 284.33 1283.69 284.106C1283.84 283.883 1283.94 283.623 1284.01 283.327C1284.08 283.031 1284.12 282.716 1284.12 282.384V282.227C1284.12 281.898 1284.08 281.589 1284.01 281.297C1283.94 281.001 1283.83 280.739 1283.68 280.511C1283.54 280.283 1283.35 280.105 1283.12 279.978C1282.9 279.845 1282.63 279.779 1282.32 279.779C1282.01 279.779 1281.74 279.845 1281.52 279.978C1281.29 280.105 1281.11 280.283 1280.96 280.511C1280.82 280.739 1280.71 281.001 1280.64 281.297C1280.57 281.589 1280.54 281.898 1280.54 282.227ZM1292.94 284.004L1295.15 278.604H1296.57L1293.51 286H1292.38L1289.32 278.604H1290.75L1292.94 284.004ZM1290.33 278.604V286H1288.68V278.604H1290.33ZM1295.56 286V278.604H1297.22V286H1295.56ZM1300.15 282.384V282.227C1300.15 281.693 1300.23 281.199 1300.38 280.743C1300.54 280.283 1300.76 279.884 1301.05 279.547C1301.35 279.205 1301.71 278.941 1302.13 278.754C1302.56 278.562 1303.04 278.467 1303.58 278.467C1304.12 278.467 1304.61 278.562 1305.03 278.754C1305.46 278.941 1305.82 279.205 1306.12 279.547C1306.41 279.884 1306.64 280.283 1306.79 280.743C1306.95 281.199 1307.03 281.693 1307.03 282.227V282.384C1307.03 282.917 1306.95 283.411 1306.79 283.867C1306.64 284.323 1306.41 284.722 1306.12 285.063C1305.82 285.401 1305.46 285.665 1305.04 285.856C1304.61 286.043 1304.13 286.137 1303.59 286.137C1303.05 286.137 1302.57 286.043 1302.14 285.856C1301.71 285.665 1301.35 285.401 1301.06 285.063C1300.76 284.722 1300.54 284.323 1300.38 283.867C1300.23 283.411 1300.15 282.917 1300.15 282.384ZM1301.8 282.227V282.384C1301.8 282.716 1301.83 283.031 1301.9 283.327C1301.97 283.623 1302.07 283.883 1302.22 284.106C1302.37 284.33 1302.55 284.505 1302.78 284.633C1303.01 284.76 1303.28 284.824 1303.59 284.824C1303.9 284.824 1304.16 284.76 1304.39 284.633C1304.61 284.505 1304.8 284.33 1304.95 284.106C1305.09 283.883 1305.2 283.623 1305.27 283.327C1305.34 283.031 1305.38 282.716 1305.38 282.384V282.227C1305.38 281.898 1305.34 281.589 1305.27 281.297C1305.2 281.001 1305.09 280.739 1304.94 280.511C1304.79 280.283 1304.61 280.105 1304.38 279.978C1304.16 279.845 1303.89 279.779 1303.58 279.779C1303.27 279.779 1303 279.845 1302.77 279.978C1302.55 280.105 1302.37 280.283 1302.22 280.511C1302.07 280.739 1301.97 281.001 1301.9 281.297C1301.83 281.589 1301.8 281.898 1301.8 282.227ZM1314.73 278.604V279.916H1311.5V286H1309.85V278.604H1314.73ZM1321.26 284.517V280.989C1321.26 280.725 1321.21 280.497 1321.11 280.306C1321.02 280.114 1320.87 279.966 1320.67 279.861C1320.48 279.757 1320.24 279.704 1319.95 279.704C1319.68 279.704 1319.45 279.75 1319.25 279.841C1319.06 279.932 1318.9 280.055 1318.79 280.21C1318.68 280.365 1318.63 280.54 1318.63 280.736H1316.99C1316.99 280.445 1317.06 280.162 1317.2 279.889C1317.34 279.615 1317.55 279.371 1317.82 279.157C1318.09 278.943 1318.41 278.774 1318.78 278.651C1319.15 278.528 1319.57 278.467 1320.04 278.467C1320.59 278.467 1321.09 278.56 1321.51 278.747C1321.95 278.934 1322.29 279.216 1322.53 279.595C1322.78 279.968 1322.91 280.438 1322.91 281.003V284.291C1322.91 284.628 1322.93 284.931 1322.98 285.2C1323.03 285.465 1323.1 285.695 1323.19 285.891V286H1321.5C1321.42 285.822 1321.36 285.597 1321.32 285.323C1321.28 285.045 1321.26 284.776 1321.26 284.517ZM1321.49 281.502L1321.51 282.521H1320.33C1320.02 282.521 1319.75 282.55 1319.52 282.609C1319.29 282.664 1319.09 282.746 1318.94 282.855C1318.78 282.965 1318.67 283.097 1318.59 283.252C1318.51 283.407 1318.47 283.582 1318.47 283.778C1318.47 283.974 1318.52 284.154 1318.61 284.318C1318.7 284.478 1318.83 284.603 1319.01 284.694C1319.18 284.785 1319.4 284.831 1319.65 284.831C1319.99 284.831 1320.28 284.763 1320.53 284.626C1320.79 284.485 1320.99 284.314 1321.13 284.113C1321.28 283.908 1321.36 283.715 1321.36 283.532L1321.9 284.264C1321.84 284.451 1321.75 284.651 1321.62 284.865C1321.49 285.079 1321.31 285.285 1321.1 285.48C1320.89 285.672 1320.64 285.829 1320.34 285.952C1320.05 286.075 1319.71 286.137 1319.33 286.137C1318.84 286.137 1318.41 286.041 1318.04 285.85C1317.66 285.654 1317.36 285.392 1317.15 285.063C1316.93 284.731 1316.83 284.355 1316.83 283.936C1316.83 283.544 1316.9 283.197 1317.04 282.896C1317.19 282.591 1317.41 282.336 1317.7 282.131C1317.99 281.926 1318.35 281.771 1318.77 281.666C1319.19 281.557 1319.66 281.502 1320.2 281.502H1321.49ZM1329.35 278.604V286H1327.7V278.604H1329.35ZM1331.78 278.604V279.902H1325.31V278.604H1331.78ZM1337.04 286.137C1336.49 286.137 1336 286.048 1335.55 285.87C1335.12 285.688 1334.74 285.435 1334.43 285.111C1334.13 284.788 1333.89 284.407 1333.73 283.97C1333.56 283.532 1333.48 283.061 1333.48 282.555V282.281C1333.48 281.702 1333.57 281.178 1333.73 280.709C1333.9 280.24 1334.14 279.839 1334.44 279.506C1334.74 279.169 1335.1 278.911 1335.51 278.733C1335.92 278.556 1336.36 278.467 1336.84 278.467C1337.37 278.467 1337.83 278.556 1338.23 278.733C1338.62 278.911 1338.95 279.162 1339.21 279.485C1339.47 279.804 1339.67 280.185 1339.8 280.627C1339.93 281.069 1340 281.557 1340 282.09V282.794H1334.28V281.611H1338.37V281.481C1338.36 281.185 1338.3 280.907 1338.19 280.647C1338.09 280.388 1337.93 280.178 1337.71 280.019C1337.49 279.859 1337.2 279.779 1336.83 279.779C1336.56 279.779 1336.31 279.839 1336.1 279.957C1335.89 280.071 1335.71 280.237 1335.57 280.456C1335.43 280.675 1335.32 280.939 1335.25 281.249C1335.17 281.554 1335.14 281.898 1335.14 282.281V282.555C1335.14 282.878 1335.18 283.179 1335.27 283.457C1335.36 283.73 1335.49 283.97 1335.66 284.175C1335.84 284.38 1336.05 284.542 1336.29 284.66C1336.54 284.774 1336.82 284.831 1337.13 284.831C1337.53 284.831 1337.88 284.751 1338.19 284.592C1338.5 284.432 1338.77 284.207 1339 283.915L1339.87 284.756C1339.71 284.988 1339.5 285.212 1339.24 285.426C1338.99 285.635 1338.68 285.806 1338.31 285.938C1337.94 286.071 1337.52 286.137 1337.04 286.137ZM1347.65 278.604V279.916H1344.04V278.604H1347.65ZM1348.94 278.604V286H1347.3V278.604H1348.94ZM1343.64 278.604H1345.27L1345.07 282.261C1345.04 282.803 1344.99 283.282 1344.9 283.696C1344.83 284.106 1344.72 284.46 1344.59 284.756C1344.46 285.048 1344.29 285.285 1344.1 285.467C1343.91 285.649 1343.69 285.784 1343.43 285.87C1343.18 285.957 1342.89 286 1342.57 286H1342.06L1342.05 284.646L1342.31 284.626C1342.48 284.612 1342.63 284.569 1342.75 284.496C1342.87 284.419 1342.98 284.309 1343.06 284.168C1343.16 284.027 1343.23 283.844 1343.28 283.621C1343.34 283.398 1343.39 283.133 1343.42 282.828C1343.46 282.523 1343.48 282.167 1343.5 281.762L1343.64 278.604ZM1353.32 280.955H1355.5C1356.14 280.955 1356.68 281.062 1357.12 281.276C1357.57 281.491 1357.91 281.789 1358.14 282.172C1358.38 282.55 1358.5 282.983 1358.5 283.471C1358.5 283.831 1358.43 284.166 1358.3 284.476C1358.17 284.781 1357.97 285.048 1357.71 285.275C1357.46 285.503 1357.14 285.681 1356.77 285.809C1356.4 285.936 1355.98 286 1355.5 286H1352.22V278.604H1353.88V284.694H1355.5C1355.83 284.694 1356.09 284.637 1356.28 284.523C1356.48 284.41 1356.62 284.261 1356.71 284.079C1356.8 283.897 1356.84 283.703 1356.84 283.498C1356.84 283.288 1356.8 283.09 1356.71 282.903C1356.62 282.716 1356.48 282.564 1356.28 282.445C1356.09 282.327 1355.83 282.268 1355.5 282.268H1353.32V280.955ZM1366.27 281.693V282.992H1362.44V281.693H1366.27ZM1362.92 278.604V286H1361.27V278.604H1362.92ZM1367.46 278.604V286H1365.81V278.604H1367.46ZM1370.3 282.384V282.227C1370.3 281.693 1370.38 281.199 1370.53 280.743C1370.69 280.283 1370.91 279.884 1371.2 279.547C1371.5 279.205 1371.86 278.941 1372.28 278.754C1372.71 278.562 1373.2 278.467 1373.73 278.467C1374.28 278.467 1374.76 278.562 1375.18 278.754C1375.61 278.941 1375.97 279.205 1376.27 279.547C1376.57 279.884 1376.79 280.283 1376.95 280.743C1377.1 281.199 1377.18 281.693 1377.18 282.227V282.384C1377.18 282.917 1377.1 283.411 1376.95 283.867C1376.79 284.323 1376.57 284.722 1376.27 285.063C1375.97 285.401 1375.61 285.665 1375.19 285.856C1374.77 286.043 1374.28 286.137 1373.75 286.137C1373.2 286.137 1372.72 286.043 1372.29 285.856C1371.87 285.665 1371.51 285.401 1371.21 285.063C1370.91 284.722 1370.69 284.323 1370.53 283.867C1370.38 283.411 1370.3 282.917 1370.3 282.384ZM1371.95 282.227V282.384C1371.95 282.716 1371.98 283.031 1372.05 283.327C1372.12 283.623 1372.23 283.883 1372.37 284.106C1372.52 284.33 1372.71 284.505 1372.93 284.633C1373.16 284.76 1373.43 284.824 1373.75 284.824C1374.05 284.824 1374.32 284.76 1374.54 284.633C1374.77 284.505 1374.95 284.33 1375.1 284.106C1375.25 283.883 1375.35 283.623 1375.42 283.327C1375.49 283.031 1375.53 282.716 1375.53 282.384V282.227C1375.53 281.898 1375.49 281.589 1375.42 281.297C1375.35 281.001 1375.24 280.739 1375.09 280.511C1374.95 280.283 1374.76 280.105 1374.53 279.978C1374.31 279.845 1374.04 279.779 1373.73 279.779C1373.42 279.779 1373.15 279.845 1372.93 279.978C1372.7 280.105 1372.52 280.283 1372.37 280.511C1372.23 280.739 1372.12 281.001 1372.05 281.297C1371.98 281.589 1371.95 281.898 1371.95 282.227ZM1383.22 286.137C1382.67 286.137 1382.18 286.048 1381.74 285.87C1381.3 285.688 1380.93 285.435 1380.62 285.111C1380.31 284.788 1380.08 284.407 1379.91 283.97C1379.75 283.532 1379.67 283.061 1379.67 282.555V282.281C1379.67 281.702 1379.75 281.178 1379.92 280.709C1380.09 280.24 1380.32 279.839 1380.62 279.506C1380.92 279.169 1381.28 278.911 1381.69 278.733C1382.1 278.556 1382.54 278.467 1383.02 278.467C1383.55 278.467 1384.01 278.556 1384.41 278.733C1384.81 278.911 1385.13 279.162 1385.39 279.485C1385.66 279.804 1385.85 280.185 1385.98 280.627C1386.11 281.069 1386.18 281.557 1386.18 282.09V282.794H1380.47V281.611H1384.55V281.481C1384.54 281.185 1384.48 280.907 1384.38 280.647C1384.27 280.388 1384.11 280.178 1383.89 280.019C1383.67 279.859 1383.38 279.779 1383.02 279.779C1382.74 279.779 1382.5 279.839 1382.28 279.957C1382.07 280.071 1381.9 280.237 1381.76 280.456C1381.62 280.675 1381.51 280.939 1381.43 281.249C1381.36 281.554 1381.32 281.898 1381.32 282.281V282.555C1381.32 282.878 1381.36 283.179 1381.45 283.457C1381.54 283.73 1381.67 283.97 1381.85 284.175C1382.02 284.38 1382.23 284.542 1382.48 284.66C1382.72 284.774 1383 284.831 1383.32 284.831C1383.71 284.831 1384.07 284.751 1384.38 284.592C1384.69 284.432 1384.95 284.207 1385.18 283.915L1386.05 284.756C1385.89 284.988 1385.68 285.212 1385.43 285.426C1385.17 285.635 1384.86 285.806 1384.49 285.938C1384.13 286.071 1383.7 286.137 1383.22 286.137ZM1395.41 280.025V288.844H1393.76V278.604H1395.28L1395.41 280.025ZM1400.23 282.233V282.377C1400.23 282.915 1400.16 283.414 1400.03 283.874C1399.91 284.33 1399.73 284.729 1399.48 285.07C1399.24 285.408 1398.94 285.67 1398.58 285.856C1398.23 286.043 1397.82 286.137 1397.35 286.137C1396.89 286.137 1396.49 286.052 1396.14 285.884C1395.8 285.711 1395.51 285.467 1395.28 285.152C1395.04 284.838 1394.85 284.469 1394.7 284.045C1394.56 283.617 1394.46 283.147 1394.4 282.637V282.083C1394.46 281.541 1394.56 281.049 1394.7 280.606C1394.85 280.164 1395.04 279.784 1395.28 279.465C1395.51 279.146 1395.8 278.9 1396.14 278.727C1396.49 278.553 1396.88 278.467 1397.34 278.467C1397.81 278.467 1398.22 278.558 1398.58 278.74C1398.94 278.918 1399.24 279.173 1399.49 279.506C1399.73 279.834 1399.92 280.23 1400.04 280.695C1400.16 281.156 1400.23 281.668 1400.23 282.233ZM1398.58 282.377V282.233C1398.58 281.892 1398.55 281.575 1398.48 281.283C1398.42 280.987 1398.32 280.727 1398.18 280.504C1398.04 280.281 1397.87 280.107 1397.65 279.984C1397.45 279.857 1397.19 279.793 1396.9 279.793C1396.6 279.793 1396.35 279.843 1396.14 279.943C1395.93 280.039 1395.76 280.174 1395.62 280.347C1395.48 280.52 1395.37 280.723 1395.29 280.955C1395.21 281.183 1395.16 281.431 1395.13 281.7V283.026C1395.18 283.354 1395.27 283.655 1395.41 283.929C1395.54 284.202 1395.72 284.421 1395.97 284.585C1396.21 284.744 1396.53 284.824 1396.91 284.824C1397.21 284.824 1397.46 284.76 1397.67 284.633C1397.88 284.505 1398.05 284.33 1398.18 284.106C1398.32 283.879 1398.42 283.617 1398.48 283.32C1398.55 283.024 1398.58 282.71 1398.58 282.377ZM1406.29 286.137C1405.74 286.137 1405.25 286.048 1404.8 285.87C1404.37 285.688 1403.99 285.435 1403.68 285.111C1403.38 284.788 1403.14 284.407 1402.98 283.97C1402.81 283.532 1402.73 283.061 1402.73 282.555V282.281C1402.73 281.702 1402.82 281.178 1402.99 280.709C1403.15 280.24 1403.39 279.839 1403.69 279.506C1403.99 279.169 1404.35 278.911 1404.76 278.733C1405.17 278.556 1405.61 278.467 1406.09 278.467C1406.62 278.467 1407.08 278.556 1407.48 278.733C1407.87 278.911 1408.2 279.162 1408.46 279.485C1408.73 279.804 1408.92 280.185 1409.05 280.627C1409.18 281.069 1409.25 281.557 1409.25 282.09V282.794H1403.53V281.611H1407.62V281.481C1407.61 281.185 1407.55 280.907 1407.44 280.647C1407.34 280.388 1407.18 280.178 1406.96 280.019C1406.74 279.859 1406.45 279.779 1406.08 279.779C1405.81 279.779 1405.56 279.839 1405.35 279.957C1405.14 280.071 1404.97 280.237 1404.82 280.456C1404.68 280.675 1404.57 280.939 1404.5 281.249C1404.42 281.554 1404.39 281.898 1404.39 282.281V282.555C1404.39 282.878 1404.43 283.179 1404.52 283.457C1404.61 283.73 1404.74 283.97 1404.91 284.175C1405.09 284.38 1405.3 284.542 1405.54 284.66C1405.79 284.774 1406.07 284.831 1406.38 284.831C1406.78 284.831 1407.13 284.751 1407.44 284.592C1407.75 284.432 1408.02 284.207 1408.25 283.915L1409.12 284.756C1408.96 284.988 1408.75 285.212 1408.5 285.426C1408.24 285.635 1407.93 285.806 1407.56 285.938C1407.19 286.071 1406.77 286.137 1406.29 286.137ZM1416.1 284.517V280.989C1416.1 280.725 1416.05 280.497 1415.96 280.306C1415.86 280.114 1415.72 279.966 1415.52 279.861C1415.33 279.757 1415.09 279.704 1414.8 279.704C1414.53 279.704 1414.3 279.75 1414.1 279.841C1413.9 279.932 1413.75 280.055 1413.64 280.21C1413.53 280.365 1413.48 280.54 1413.48 280.736H1411.84C1411.84 280.445 1411.91 280.162 1412.05 279.889C1412.19 279.615 1412.39 279.371 1412.66 279.157C1412.93 278.943 1413.25 278.774 1413.63 278.651C1414 278.528 1414.42 278.467 1414.89 278.467C1415.44 278.467 1415.93 278.56 1416.36 278.747C1416.8 278.934 1417.13 279.216 1417.38 279.595C1417.63 279.968 1417.76 280.438 1417.76 281.003V284.291C1417.76 284.628 1417.78 284.931 1417.82 285.2C1417.88 285.465 1417.95 285.695 1418.04 285.891V286H1416.35C1416.27 285.822 1416.21 285.597 1416.16 285.323C1416.12 285.045 1416.1 284.776 1416.1 284.517ZM1416.34 281.502L1416.36 282.521H1415.17C1414.87 282.521 1414.6 282.55 1414.37 282.609C1414.13 282.664 1413.94 282.746 1413.78 282.855C1413.63 282.965 1413.51 283.097 1413.44 283.252C1413.36 283.407 1413.32 283.582 1413.32 283.778C1413.32 283.974 1413.37 284.154 1413.46 284.318C1413.55 284.478 1413.68 284.603 1413.85 284.694C1414.03 284.785 1414.25 284.831 1414.5 284.831C1414.83 284.831 1415.13 284.763 1415.38 284.626C1415.63 284.485 1415.83 284.314 1415.98 284.113C1416.13 283.908 1416.2 283.715 1416.21 283.532L1416.74 284.264C1416.69 284.451 1416.6 284.651 1416.46 284.865C1416.33 285.079 1416.16 285.285 1415.95 285.48C1415.74 285.672 1415.48 285.829 1415.19 285.952C1414.89 286.075 1414.56 286.137 1414.17 286.137C1413.69 286.137 1413.26 286.041 1412.88 285.85C1412.5 285.654 1412.21 285.392 1411.99 285.063C1411.78 284.731 1411.67 284.355 1411.67 283.936C1411.67 283.544 1411.75 283.197 1411.89 282.896C1412.04 282.591 1412.26 282.336 1412.55 282.131C1412.84 281.926 1413.19 281.771 1413.61 281.666C1414.03 281.557 1414.51 281.502 1415.05 281.502H1416.34ZM1422.66 278.604V286H1421.01V278.604H1422.66ZM1427.48 278.604L1424.15 283.054H1422.27L1422.06 281.563H1423.43L1425.43 278.604H1427.48ZM1425.56 286L1423.33 282.773L1424.63 281.837L1427.72 286H1425.56ZM1433.45 278.604V286H1431.79V278.604H1433.45ZM1435.88 278.604V279.902H1429.41V278.604H1435.88ZM1437.8 282.384V282.227C1437.8 281.693 1437.88 281.199 1438.03 280.743C1438.19 280.283 1438.41 279.884 1438.7 279.547C1439 279.205 1439.36 278.941 1439.78 278.754C1440.21 278.562 1440.7 278.467 1441.23 278.467C1441.78 278.467 1442.26 278.562 1442.68 278.754C1443.11 278.941 1443.47 279.205 1443.77 279.547C1444.07 279.884 1444.29 280.283 1444.45 280.743C1444.6 281.199 1444.68 281.693 1444.68 282.227V282.384C1444.68 282.917 1444.6 283.411 1444.45 283.867C1444.29 284.323 1444.07 284.722 1443.77 285.063C1443.47 285.401 1443.11 285.665 1442.69 285.856C1442.27 286.043 1441.79 286.137 1441.25 286.137C1440.71 286.137 1440.22 286.043 1439.79 285.856C1439.37 285.665 1439.01 285.401 1438.71 285.063C1438.42 284.722 1438.19 284.323 1438.03 283.867C1437.88 283.411 1437.8 282.917 1437.8 282.384ZM1439.45 282.227V282.384C1439.45 282.716 1439.48 283.031 1439.55 283.327C1439.62 283.623 1439.73 283.883 1439.87 284.106C1440.02 284.33 1440.21 284.505 1440.43 284.633C1440.66 284.76 1440.93 284.824 1441.25 284.824C1441.55 284.824 1441.82 284.76 1442.04 284.633C1442.27 284.505 1442.46 284.33 1442.6 284.106C1442.75 283.883 1442.85 283.623 1442.92 283.327C1443 283.031 1443.03 282.716 1443.03 282.384V282.227C1443.03 281.898 1443 281.589 1442.92 281.297C1442.85 281.001 1442.74 280.739 1442.59 280.511C1442.45 280.283 1442.26 280.105 1442.03 279.978C1441.81 279.845 1441.54 279.779 1441.23 279.779C1440.92 279.779 1440.66 279.845 1440.43 279.978C1440.2 280.105 1440.02 280.283 1439.87 280.511C1439.73 280.739 1439.62 281.001 1439.55 281.297C1439.48 281.589 1439.45 281.898 1439.45 282.227ZM1449.11 280.025V288.844H1447.47V278.604H1448.98L1449.11 280.025ZM1453.93 282.233V282.377C1453.93 282.915 1453.87 283.414 1453.74 283.874C1453.62 284.33 1453.43 284.729 1453.19 285.07C1452.95 285.408 1452.65 285.67 1452.29 285.856C1451.94 286.043 1451.53 286.137 1451.06 286.137C1450.6 286.137 1450.2 286.052 1449.85 285.884C1449.51 285.711 1449.22 285.467 1448.98 285.152C1448.75 284.838 1448.56 284.469 1448.41 284.045C1448.27 283.617 1448.17 283.147 1448.11 282.637V282.083C1448.17 281.541 1448.27 281.049 1448.41 280.606C1448.56 280.164 1448.75 279.784 1448.98 279.465C1449.22 279.146 1449.51 278.9 1449.85 278.727C1450.19 278.553 1450.59 278.467 1451.05 278.467C1451.51 278.467 1451.93 278.558 1452.29 278.74C1452.65 278.918 1452.95 279.173 1453.2 279.506C1453.44 279.834 1453.63 280.23 1453.75 280.695C1453.87 281.156 1453.93 281.668 1453.93 282.233ZM1452.29 282.377V282.233C1452.29 281.892 1452.25 281.575 1452.19 281.283C1452.13 280.987 1452.03 280.727 1451.89 280.504C1451.75 280.281 1451.58 280.107 1451.36 279.984C1451.15 279.857 1450.9 279.793 1450.6 279.793C1450.31 279.793 1450.06 279.843 1449.85 279.943C1449.64 280.039 1449.47 280.174 1449.33 280.347C1449.19 280.52 1449.08 280.723 1449 280.955C1448.92 281.183 1448.87 281.431 1448.83 281.7V283.026C1448.89 283.354 1448.98 283.655 1449.11 283.929C1449.25 284.202 1449.43 284.421 1449.68 284.585C1449.92 284.744 1450.24 284.824 1450.62 284.824C1450.91 284.824 1451.17 284.76 1451.38 284.633C1451.59 284.505 1451.76 284.33 1451.89 284.106C1452.03 283.879 1452.13 283.617 1452.19 283.32C1452.25 283.024 1452.29 282.71 1452.29 282.377ZM1461.79 281.693V282.992H1457.96V281.693H1461.79ZM1458.44 278.604V286H1456.79V278.604H1458.44ZM1462.98 278.604V286H1461.33V278.604H1462.98ZM1465.82 282.384V282.227C1465.82 281.693 1465.9 281.199 1466.05 280.743C1466.21 280.283 1466.43 279.884 1466.72 279.547C1467.02 279.205 1467.38 278.941 1467.8 278.754C1468.23 278.562 1468.71 278.467 1469.25 278.467C1469.79 278.467 1470.28 278.562 1470.7 278.754C1471.13 278.941 1471.49 279.205 1471.79 279.547C1472.08 279.884 1472.31 280.283 1472.46 280.743C1472.62 281.199 1472.7 281.693 1472.7 282.227V282.384C1472.7 282.917 1472.62 283.411 1472.46 283.867C1472.31 284.323 1472.08 284.722 1471.79 285.063C1471.49 285.401 1471.13 285.665 1470.71 285.856C1470.28 286.043 1469.8 286.137 1469.26 286.137C1468.72 286.137 1468.24 286.043 1467.81 285.856C1467.38 285.665 1467.02 285.401 1466.73 285.063C1466.43 284.722 1466.21 284.323 1466.05 283.867C1465.9 283.411 1465.82 282.917 1465.82 282.384ZM1467.47 282.227V282.384C1467.47 282.716 1467.5 283.031 1467.57 283.327C1467.64 283.623 1467.74 283.883 1467.89 284.106C1468.04 284.33 1468.22 284.505 1468.45 284.633C1468.68 284.76 1468.95 284.824 1469.26 284.824C1469.57 284.824 1469.83 284.76 1470.06 284.633C1470.28 284.505 1470.47 284.33 1470.62 284.106C1470.76 283.883 1470.87 283.623 1470.94 283.327C1471.01 283.031 1471.05 282.716 1471.05 282.384V282.227C1471.05 281.898 1471.01 281.589 1470.94 281.297C1470.87 281.001 1470.76 280.739 1470.61 280.511C1470.46 280.283 1470.28 280.105 1470.05 279.978C1469.83 279.845 1469.56 279.779 1469.25 279.779C1468.94 279.779 1468.67 279.845 1468.44 279.978C1468.22 280.105 1468.04 280.283 1467.89 280.511C1467.74 280.739 1467.64 281.001 1467.57 281.297C1467.5 281.589 1467.47 281.898 1467.47 282.227ZM1478.74 286.137C1478.19 286.137 1477.7 286.048 1477.25 285.87C1476.82 285.688 1476.44 285.435 1476.13 285.111C1475.83 284.788 1475.59 284.407 1475.43 283.97C1475.26 283.532 1475.18 283.061 1475.18 282.555V282.281C1475.18 281.702 1475.27 281.178 1475.44 280.709C1475.6 280.24 1475.84 279.839 1476.14 279.506C1476.44 279.169 1476.8 278.911 1477.21 278.733C1477.62 278.556 1478.06 278.467 1478.54 278.467C1479.07 278.467 1479.53 278.556 1479.93 278.733C1480.32 278.911 1480.65 279.162 1480.91 279.485C1481.18 279.804 1481.37 280.185 1481.5 280.627C1481.63 281.069 1481.7 281.557 1481.7 282.09V282.794H1475.98V281.611H1480.07V281.481C1480.06 281.185 1480 280.907 1479.89 280.647C1479.79 280.388 1479.63 280.178 1479.41 280.019C1479.19 279.859 1478.9 279.779 1478.53 279.779C1478.26 279.779 1478.01 279.839 1477.8 279.957C1477.59 280.071 1477.42 280.237 1477.27 280.456C1477.13 280.675 1477.02 280.939 1476.95 281.249C1476.87 281.554 1476.84 281.898 1476.84 282.281V282.555C1476.84 282.878 1476.88 283.179 1476.97 283.457C1477.06 283.73 1477.19 283.97 1477.36 284.175C1477.54 284.38 1477.75 284.542 1477.99 284.66C1478.24 284.774 1478.52 284.831 1478.83 284.831C1479.23 284.831 1479.58 284.751 1479.89 284.592C1480.2 284.432 1480.47 284.207 1480.7 283.915L1481.57 284.756C1481.41 284.988 1481.2 285.212 1480.95 285.426C1480.69 285.635 1480.38 285.806 1480.01 285.938C1479.64 286.071 1479.22 286.137 1478.74 286.137ZM1492.33 282.466H1490.91V281.632H1492.06C1492.35 281.632 1492.58 281.593 1492.76 281.516C1492.93 281.438 1493.06 281.331 1493.13 281.194C1493.21 281.053 1493.25 280.889 1493.25 280.702C1493.25 280.538 1493.21 280.383 1493.13 280.237C1493.06 280.087 1492.93 279.964 1492.76 279.868C1492.58 279.772 1492.34 279.725 1492.03 279.725C1491.78 279.725 1491.55 279.766 1491.35 279.848C1491.16 279.93 1491 280.044 1490.89 280.189C1490.77 280.335 1490.72 280.504 1490.72 280.695H1489.07C1489.07 280.235 1489.2 279.839 1489.46 279.506C1489.72 279.173 1490.08 278.918 1490.52 278.74C1490.96 278.562 1491.45 278.474 1491.98 278.474C1492.43 278.474 1492.83 278.521 1493.19 278.617C1493.55 278.708 1493.86 278.845 1494.11 279.027C1494.36 279.205 1494.56 279.428 1494.69 279.697C1494.83 279.962 1494.89 280.269 1494.89 280.62C1494.89 280.871 1494.84 281.108 1494.72 281.331C1494.6 281.554 1494.43 281.753 1494.2 281.926C1493.98 282.094 1493.71 282.227 1493.39 282.322C1493.08 282.418 1492.72 282.466 1492.33 282.466ZM1490.91 281.987H1492.33C1492.77 281.987 1493.16 282.031 1493.49 282.117C1493.83 282.199 1494.11 282.322 1494.34 282.486C1494.57 282.65 1494.74 282.853 1494.85 283.095C1494.97 283.332 1495.03 283.605 1495.03 283.915C1495.03 284.261 1494.96 284.574 1494.81 284.852C1494.66 285.125 1494.45 285.357 1494.18 285.549C1493.91 285.74 1493.59 285.886 1493.21 285.986C1492.84 286.087 1492.43 286.137 1491.98 286.137C1491.48 286.137 1491.01 286.055 1490.54 285.891C1490.08 285.727 1489.7 285.474 1489.4 285.132C1489.1 284.785 1488.95 284.346 1488.95 283.812H1490.6C1490.6 283.999 1490.66 284.175 1490.77 284.339C1490.89 284.503 1491.05 284.637 1491.26 284.742C1491.48 284.842 1491.74 284.893 1492.04 284.893C1492.35 284.893 1492.6 284.845 1492.8 284.749C1492.99 284.649 1493.14 284.519 1493.23 284.359C1493.33 284.195 1493.38 284.022 1493.38 283.84C1493.38 283.594 1493.33 283.396 1493.23 283.245C1493.14 283.095 1492.99 282.985 1492.8 282.917C1492.6 282.844 1492.35 282.808 1492.06 282.808H1490.91V281.987ZM1499.17 278.604H1500.82L1500.74 281.208C1500.72 281.965 1500.63 282.614 1500.48 283.156C1500.33 283.699 1500.13 284.157 1499.89 284.53C1499.65 284.899 1499.38 285.202 1499.07 285.439C1498.77 285.676 1498.45 285.863 1498.12 286H1497.63V284.701L1497.87 284.688C1498.06 284.478 1498.23 284.268 1498.37 284.059C1498.52 283.844 1498.64 283.61 1498.74 283.354C1498.84 283.095 1498.92 282.792 1498.97 282.445C1499.03 282.099 1499.07 281.687 1499.09 281.208L1499.17 278.604ZM1499.61 278.604H1504.3V286H1502.66V279.998H1499.61V278.604ZM1497.26 284.688H1505.31V288.201H1503.66V286H1498.93V288.201H1497.25L1497.26 284.688ZM1512.06 284.517V280.989C1512.06 280.725 1512.01 280.497 1511.91 280.306C1511.82 280.114 1511.67 279.966 1511.48 279.861C1511.28 279.757 1511.04 279.704 1510.75 279.704C1510.48 279.704 1510.25 279.75 1510.05 279.841C1509.86 279.932 1509.71 280.055 1509.6 280.21C1509.49 280.365 1509.43 280.54 1509.43 280.736H1507.79C1507.79 280.445 1507.86 280.162 1508 279.889C1508.14 279.615 1508.35 279.371 1508.62 279.157C1508.89 278.943 1509.21 278.774 1509.58 278.651C1509.96 278.528 1510.38 278.467 1510.84 278.467C1511.4 278.467 1511.89 278.56 1512.32 278.747C1512.75 278.934 1513.09 279.216 1513.34 279.595C1513.59 279.968 1513.71 280.438 1513.71 281.003V284.291C1513.71 284.628 1513.73 284.931 1513.78 285.2C1513.83 285.465 1513.9 285.695 1513.99 285.891V286H1512.3C1512.23 285.822 1512.16 285.597 1512.12 285.323C1512.08 285.045 1512.06 284.776 1512.06 284.517ZM1512.3 281.502L1512.31 282.521H1511.13C1510.82 282.521 1510.55 282.55 1510.32 282.609C1510.09 282.664 1509.89 282.746 1509.74 282.855C1509.58 282.965 1509.47 283.097 1509.39 283.252C1509.31 283.407 1509.27 283.582 1509.27 283.778C1509.27 283.974 1509.32 284.154 1509.41 284.318C1509.5 284.478 1509.63 284.603 1509.81 284.694C1509.99 284.785 1510.2 284.831 1510.45 284.831C1510.79 284.831 1511.08 284.763 1511.33 284.626C1511.59 284.485 1511.79 284.314 1511.93 284.113C1512.08 283.908 1512.16 283.715 1512.17 283.532L1512.7 284.264C1512.64 284.451 1512.55 284.651 1512.42 284.865C1512.29 285.079 1512.11 285.285 1511.9 285.48C1511.69 285.672 1511.44 285.829 1511.14 285.952C1510.85 286.075 1510.51 286.137 1510.13 286.137C1509.65 286.137 1509.22 286.041 1508.84 285.85C1508.46 285.654 1508.16 285.392 1507.95 285.063C1507.73 284.731 1507.63 284.355 1507.63 283.936C1507.63 283.544 1507.7 283.197 1507.85 282.896C1508 282.591 1508.22 282.336 1508.5 282.131C1508.79 281.926 1509.15 281.771 1509.57 281.666C1509.99 281.557 1510.47 281.502 1511 281.502H1512.3ZM1521.89 281.693V282.992H1518.06V281.693H1521.89ZM1518.54 278.604V286H1516.89V278.604H1518.54ZM1523.08 278.604V286H1521.43V278.604H1523.08ZM1527.93 283.594L1530.84 278.604H1532.49V286H1530.84V281.003L1527.93 286H1526.29V278.604H1527.93V283.594ZM1538.89 286.137C1538.34 286.137 1537.85 286.048 1537.41 285.87C1536.97 285.688 1536.6 285.435 1536.29 285.111C1535.98 284.788 1535.75 284.407 1535.58 283.97C1535.42 283.532 1535.34 283.061 1535.34 282.555V282.281C1535.34 281.702 1535.42 281.178 1535.59 280.709C1535.76 280.24 1535.99 279.839 1536.29 279.506C1536.59 279.169 1536.95 278.911 1537.36 278.733C1537.77 278.556 1538.21 278.467 1538.69 278.467C1539.22 278.467 1539.68 278.556 1540.08 278.733C1540.48 278.911 1540.8 279.162 1541.06 279.485C1541.33 279.804 1541.52 280.185 1541.65 280.627C1541.78 281.069 1541.85 281.557 1541.85 282.09V282.794H1536.14V281.611H1540.22V281.481C1540.21 281.185 1540.16 280.907 1540.05 280.647C1539.94 280.388 1539.78 280.178 1539.56 280.019C1539.34 279.859 1539.05 279.779 1538.69 279.779C1538.41 279.779 1538.17 279.839 1537.95 279.957C1537.74 280.071 1537.57 280.237 1537.43 280.456C1537.29 280.675 1537.18 280.939 1537.1 281.249C1537.03 281.554 1536.99 281.898 1536.99 282.281V282.555C1536.99 282.878 1537.03 283.179 1537.12 283.457C1537.21 283.73 1537.34 283.97 1537.52 284.175C1537.69 284.38 1537.9 284.542 1538.15 284.66C1538.39 284.774 1538.67 284.831 1538.99 284.831C1539.38 284.831 1539.74 284.751 1540.05 284.592C1540.36 284.432 1540.62 284.207 1540.85 283.915L1541.72 284.756C1541.56 284.988 1541.35 285.212 1541.1 285.426C1540.84 285.635 1540.53 285.806 1540.16 285.938C1539.8 286.071 1539.37 286.137 1538.89 286.137Z" fill="black"/>
        </Fragment>
    );
};