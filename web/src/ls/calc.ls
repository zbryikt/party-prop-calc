
calc = (parties) ->
  seat = 34
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
    consume += it.seat

  while consume < seat =>
    parties.sort ((a,b) -> b.remain - a.remain)
    parties.0.seat++
    parties.0.remain = 0
    consume++
  final = parties.filter -> it.seat
  final.sort (a,b) -> b.seat - a.seat
  final.map -> console.log it.name, it.seat

