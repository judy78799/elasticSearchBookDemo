import React, {useMemo} from 'react';


const ShowSum = ({label, n}) => {
    const sum = (num) => num + 5;   //JS/React는 선언된 함수만 참조 가능 → 참조 전에 호출하면 에러
    const result = useMemo(() => sum(n), [n]);

    return(
        <span>
            {label} : {result}
        </span>
    )
}


export default ShowSum;