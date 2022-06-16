interface Killer {
    protected function kill(Killable $victim);
}
interface Killable {
    protected function dead(Killer $killer);
}