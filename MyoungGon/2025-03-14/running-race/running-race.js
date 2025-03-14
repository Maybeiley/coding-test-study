function solution(players, callings) {
  const rank = {};

  players.forEach((player, index) => {
    rank[player] = index;
  });

  callings.forEach((calledPlayer) => {
    const curRank = rank[calledPlayer];
    if (curRank === 0) return;

    const prevRank = curRank - 1;
    const prevPlayer = players[prevRank];

    [players[curRank], players[prevRank]] = [
      players[prevRank],
      players[curRank]
    ];

    rank[calledPlayer] = prevRank;
    rank[prevPlayer] = curRank;
  });

  return players;
}
