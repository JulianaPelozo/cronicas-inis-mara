import { 
  CardBase, CardHeader, CardTitle, CardBadge, 
  CardDivider, CardLema, CardStats, StatRow, StatLabel, StatValue 
} from './styles';

export function ClaCard({ nome, elemento, lema }) {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle>{nome}</CardTitle>
        <CardBadge>{elemento}</CardBadge>
      </CardHeader>
      <CardDivider />
      <CardLema>{lema}</CardLema>
    </CardBase>
  );
}

export function PersonagemCard({ nome, cla, magia, status }) {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle>{nome}</CardTitle>
        <CardBadge>{status}</CardBadge>
      </CardHeader>
      <CardDivider />
      <CardStats>
        <StatRow>
          <StatLabel>Clã</StatLabel>
          <StatValue>{cla}</StatValue>
        </StatRow>
        <StatRow>
          <StatLabel>Magia</StatLabel>
          <StatValue>{magia}</StatValue>
        </StatRow>
      </CardStats>
    </CardBase>
  );
}