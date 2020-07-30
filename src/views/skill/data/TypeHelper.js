const TriggerObject = {
  1: '我方',
  2: '敌方'
}

const TriggerTarget = {
  0: '默认',
  1: '随机',
  2: '自己',
  4: '所有人',
  5: '生命最低者',
  6: '自己之外攻击最高者',
  7: '其他队友',
  8: '距离自已最近的目标',
  9: '距离自己最远的人',
  10: '所有远程角色',
  11: '所有飞行角色',
  12: '与自身相邻1格的目标',
  13: '与自身相邻2格的目标'
}

const TriggerCondition = {
  1: '受到致命攻击时',
  2: '受到施法者攻击时',
  3: '阵亡时',
  4: '被复活时',
  5: '生命不足时',
  6: '战斗开始时',
  7: '施法者释放怒气技能时',
  8: '释放者普通攻击时',
  9: '击杀敌方角色时',
  10: '我军有人存活时',
  11: '行动结束时',
  12: '单次受伤超过一定%时'
}

export const TypeHelper = {
  triggerObject: (type) => {
    return TriggerObject[type]
  },
  triggerTarget: (type) => {
    return TriggerTarget[type]
  },
  TriggerCondition: (type) => {
    return TriggerCondition[type]
  }
}
