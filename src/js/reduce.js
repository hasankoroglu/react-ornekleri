import React from "react";

const Reduce = () => {
  let bigArray = [];
  for (let i = 0; i < 100000; i++) {
    bigArray[i] = i;
  }

  console.time("bigNormal");
  let mappedBigArray = bigArray
    .filter(function(val) {
      return val % 2 === 0;
    })
    .map(function(val) {
      return val * 2;
    });

  console.timeEnd("bigNormal");
  //console.log("mappedBigArray:",mappedBigArray);

  console.time("bigReduce");
  let reducedBigArray = bigArray.reduce(function(acc, val) {
    if (val % 2 === 0) {
      acc.push(val * 2);
    }
    return acc;
  }, []);

  console.timeEnd("bigReduce");

  //console.log(reducedBigArray);
  return(
    <div>
    <h1>Reduce Örneği</h1>
    <p>Sonuçları görmek için lütfen console ekranına bakınız.</p>
    </div>
  );
};

export default Reduce;
