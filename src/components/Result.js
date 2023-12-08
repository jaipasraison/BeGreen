import React from 'react';
import { useParams } from 'react-router';

const Result = () => {
  let result = localStorage.getItem('formResult');

  if (result) {
    result = JSON.parse(result);
    result = result.formResponses
    console.log(result);
  } else {
    console.log('No data found in localStorage.');
  }
  const waterUsedInShower = result[1][10] * 52 * result[1][10] * 10
  const waterUsedInBath = result[1][12] * 150
  const waterUsedInBathroom = waterUsedInShower + waterUsedInBath
  const wateUsedInToiletPaper = result[2][14] * 52 * 0.2
  const waterUsedInToiletFlush = result[2][13] * 52 * 10
  const waterUsedInToilet = wateUsedInToiletPaper + waterUsedInToiletFlush
  console.log(waterUsedInBathroom)

  // Assuming 'result' has specific properties you want to display
  // For example, if it has a 'formResponses' key


  // Render specific properties or handle the object accordingly
  return (
    <div>
      {waterUsedInBathroom}

    </div>
  );
};

export default Result;
