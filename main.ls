seat = 34

parties = [
 * name: '民主進步黨', rate: 44.06, side: \green
 * name: '台灣基進', rate: 0.0, side: \green
 * name: '綠黨', rate: 4.5, side: \green
 * name: '一邊一國行動黨', rate: 0, side: \green
 * name: '喜樂島聯盟', rate: 0, side: \green

 * name: '中國國民黨', rate: 26.91, side: \none
 * name: '時代力量', rate: 6.1, side: \none
 * name: '台灣民眾黨', rate: 0.0, side: \none

 * name: '親民黨', rate: 6.52, side: \none
 * name: '台灣團結聯盟', rate: 0.5, side: \none
 * name: '新黨', rate: 4.1843, side: \none
 * name: '中華統一促進黨', rate: 0, side: \none
 * name: '國會政黨聯盟', rate: 0, side: \none
 * name: '宗教聯盟', rate: 0, side: \none
 * name: '勞動黨', rate: 0, side: \none
 * name: '台灣維新', rate: 0, side: \none
 * name: '台彭黨', rate: 0, side: \none
 * name: '合一行動聯盟', rate: 0, side: \none
 * name: '安定力量', rate: 0, side: \none
]

calc = ->
  consume = 0
  sum = parties.reduce(((a,b) -> a + b.rate), 0)
  sum2 = parties
    .filter -> it.rate >= 5
    .reduce(((a,b) -> a + b.rate),0)
  parties.map ->
    it.rate2 = if it.rate < 5 => 0
    else Math.round((it.rate / sum2) * 10000) / 10000
    it.seat = Math.floor(it.rate2 * seat) or 0
    it.remain = (it.rate2 * seat) - it.seat
    #if it.rate2 => console.log it.name, it.rate2, (it.rate2 * seat), it.remain
    consume += it.seat
  #console.log "consume:" ,consume

  while consume < seat =>
    parties.sort ((a,b) -> b.remain - a.remain)
    parties.0.seat++
    parties.0.remain = 0
    consume++
  final = parties.filter -> it.seat
  final.sort (a,b) -> b.seat - a.seat
  final.map -> console.log it.name, it.seat


calc!
greens = parties.filter -> it.side == \green
dpp = greens.filter((d,i) -> d.name == \民主進步黨).0
small = greens.filter (d,i) -> d.name != \民主進步黨
raws = {}
greens.map -> raws[it.name] = it.rate
sum = greens.reduce(((a,b) -> a + b.rate),0)
console.log "泛綠得票率: ", sum
console.log small.map -> it.name

for i from 0 til 5 =>
  for j from 0 til 4 => small[j].rate = if j < i => 5 else 0
  count = i
  dpp.rate = sum - count * 5
  console.log ""
  console.log "#count 小黨過 5%"
  greens.map(-> console.log " >", it.name, it.rate)
  calc!
  console.log "總席次: ", greens.reduce(((a,b) -> a + b.seat),0)


for i from 0 til 5 =>
  for j from 0 til 4 => small[j].rate = if j < i => 4.99 else 0
  count = i
  dpp.rate = sum - count * 5
  console.log ""
  console.log "#count 小黨分散"
  greens.map(-> console.log " >", it.name, it.rate)
  calc!
  console.log "總席次: ", greens.reduce(((a,b) -> a + b.seat),0)

