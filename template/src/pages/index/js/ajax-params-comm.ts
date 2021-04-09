export default function(vm: any) {
  const commParams = vm.$gData.commParams;
  const { activityGuid, gameId, userId, accessToken } = commParams;
  return {
    ActivityGuid: activityGuid,
    GameId: gameId,
    UserId: userId,
    UserToken: accessToken
  };
}
