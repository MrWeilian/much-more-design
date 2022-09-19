// 比例
const ratioMap = {
  // 毫秒
  get S () {
    return 1
  },
  // 秒
  get s () {
    return this.S * 1000
  },
  // 分
  get m () {
    return this.s * 60
  },
  // 时
  get h () {
    return this.m * 60
  },
  // 天
  get d () {
    return this.h * 24
  },
  // 周
  get w () {
    return this.d * 7
  },
  // 月
  get mo () {
    return this.d * 30
  },
  get y () {
    return this.d * 365
  }
}

// 获取最近xxx的时间段
function getLastTime (duration: number, unit: keyof typeof ratioMap = 'h') {
  const ratio = ratioMap[unit]
  const now = new Date()
  return [new Date(now.getTime() - duration * ratio), now]
}

// 获取 shortcut 配置
function getShortcut (duration: number, unit: keyof typeof ratioMap, text: string, type: string) {
  return {
    type,
    text,
    value: getLastTime(duration, unit)
  }
}

export function createDateRangeShortcuts () {
  return [
    getShortcut(0.5, 'h', '最近半小时', 'last0.5Hour'),
    getShortcut(1, 'h', '最近一小时', 'last1Hour'),
    getShortcut(3, 'h', '最近三小时', 'last3Hour'),
    getShortcut(6, 'h', '最近六小时', 'last6Hour'),
    getShortcut(1, 'd', '最近一天', 'last1Day'),
    getShortcut(3, 'd', '最近三天', 'last3Day'),
    getShortcut(1, 'w', '最近一周', 'last1Week')
  ]
}
