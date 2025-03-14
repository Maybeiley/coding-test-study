// 달리기 경주
function solution(players, callings) {
  for (let name of callings) {
    let rating = players.indexOf(name);
    if (rating > 0) {
      [players[rating - 1], players[rating]] = [
        players[rating],
        players[rating - 1],
      ];
    }
  }
  return players;
}

// 아쉬운점 : 테스트 10~13 시간초과로 실패함

function solution(players, callings) {
  let playerIndex = {};
  for (let i = 0; i < players.length; i++) {
    playerIndex[players[i]] = i;
  }

  for (let name of callings) {
    let idx = playerIndex[name];
    let prevName = players[idx - 1];

    players[idx] = prevName;
    players[idx - 1] = name;

    playerIndex[name] = idx - 1;
    playerIndex[prevName] = idx;
  }

  return players;
}
