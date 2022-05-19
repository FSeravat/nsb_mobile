import React from "react";
import { ScrollView } from "react-native";
import {
  Overlay as ElementsOverlay,
  OverlayProps,
  Text,
} from "react-native-elements";
import Button from "../Button";
import { styles } from "./styles";

type Props = OverlayProps & {
  pressFunction?: any;
};

export default function PrivacyPolicy({ pressFunction, ...rest }: Props) {
  const editado = `
NSB - Nosso Sangue Bom

Política de Privacidade e Segurança de Dados
O APP NSB - Nosso Sangue Bom coleta dados pessoais com a finalidade de prestar seus serviços e dispor de informações relevantes para o dia a dia de Salvador e região metropolitana no estado da Bahia. Estamos comprometidos a preservar a privacidade e segurança de nossos usuários, com tal processamento de dados sendo feito em estrita conformidade às leis e regulamentos aplicáveis, em particular com a Lei Geral de Proteção de Dados (LGPD). É altamente recomendado que os usuários leiam com atenção a presente Política de Privacidade.
 
1.  INFORMAÇÕES PESSOAIS
 
1.1 As Informações Pessoais dos Usuários serão coletadas pelo NSB - Nosso Sangue Bom através de algumas ferramentas como: cadastro, pesquisas, informações estatísticas baseadas em dados e comportamento do Usuário, suporte ao Usuário e outras ferramentas, conforme identificados abaixo.
 
1.1.2 Cadastro. Para que o Usuário possa iniciar a utilização da Plataforma, o NSB - Nosso Sangue Bom coletará as informações do Usuário através do preenchimento do Cadastro. No momento de realização do Cadastro, serão solicitadas ao Usuário as Informações Cadastrais do Usuário, as quais, uma vez fornecidas, possibilita o acesso do Usuário à Plataforma, bem como, mas não se limitando a personalização do contato do Usuário com a Plataforma.
 
1.1.3 Pesquisas. Através de pesquisas realizadas, o NSB - Nosso Sangue Bom poderá obter informações estatísticas como: número de doações de sangue por bairros soteropolitanos, bem como o número dos estoques de sangue em Salvador-Ba.
 
2.  UTILIZAÇÃO DAS INFORMAÇÕES PESSOAIS
 
2.1 As Informações Pessoais somente serão utilizadas pelo NSB - Nosso Sangue Bom para: (i) realizar a manutenção do cadastro e acesso dos Usuários à Plataforma e serviços a ele disponibilizados; (ii) enviar comunicações ao Usuário (via notificações no Aplicativo Móvel) concernente aos serviços da Plataforma utilizados pelo Usuário; (iii) diagnosticar problemas na Plataforma; (iv) personalizar os Serviços apresentados na Plataforma; (v) realizar pesquisas referente aos Serviços e/ou a Plataforma; (vi) aumentar a segurança da Plataforma, (vii) realizar a medição da utilização e eficácia dos Serviços e da Plataforma; (viii) atender à demandas investigativas ou judiciais relacionadas a atividades suspeitas ou comprovadas e (ix) proteger os direitos do NSB - Nosso Sangue Bom. As Informações Pessoais não serão transmitidas, disponibilizadas, divulgadas ou comercializadas pelo NSB - Nosso Sangue Bom assim como pelos seus administradores a terceiros.
 
3. AUTORIZAÇÃO DE DIVULGAÇÃO
 
O NSB - Nosso Sangue Bom está autorizado a divulgar, excepcionalmente, as Informações Pessoais a terceiros, nos termos da legislação vigente aplicável, nos casos em que seja necessário identificar, entrar em contato ou agir legalmente contra o Usuário que, eventualmente: (i) seja suspeito de violar ou esteja violando (intencionalmente ou não) direitos do NSB - Nosso Sangue Bom ou de terceiros, (ii) esteja descumprindo a presente política, os Termos e Condições de Uso da Plataforma ou a legislação vigente. O NSB - Nosso Sangue Bom divulgará as informações sobre o Usuário quando assim lhe for exigido por lei, a critério exclusivo do NSB - Nosso Sangue Bom e/ou das autoridades competentes.
 
4. INFORMAÇÕES INCLUÍDAS PELO USUÁRIO NA PLATAFORMA
 
Conforme estabelecido nos Termos e Condições de Uso da Plataforma, todas as informações incluídas pelo Usuário na Plataforma através da utilização e fruição dos Serviços a ele disponibilizados (as “Informações dos Formulários”), somente serão acessadas e utilizadas pelo NSB - Nosso Sangue Bom no cumprimento das disposições estabelecidas na presente Política. O NSB - Nosso Sangue Bom não é responsável pelas informações dos Formulários, seu conteúdo, veracidade, integridade, acesso e utilização. O Usuário é o único e exclusivo responsável pelo conteúdo por ele incluído nos formulários, respondendo isoladamente por sua veracidade, idoneidade, integridade, bem como pelo seu acesso e armazenamento na Plataforma. O acesso a estas Informações Incluídas somente será realizado pelo NSB - Nosso Sangue Bom caso o Usuário esteja (i) violando (intencionalmente ou não) direitos do NSB - Nosso Sangue Bom ou de terceiros, (ii) descumprindo: a presente política, os Termos e Condições de Uso da Plataforma, a legislação vigente, decisão administrativa ou judicial.
 
5. SEGURANÇA
 
O Cadastro do Usuário é pessoal e intransferível. O NSB - Nosso Sangue Bom recomenda que o Usuário não revele, forneça ou empreste as Informações Cadastrais a ninguém. O USUÁRIO SERÁ RESPONSÁVEL INTEGRAL E EXCLUSIVAMENTE, PERANTE O NSB - NOSSO SANGUE BOM E QUAISQUER TERCEIROS, POR TODOS OS ATOS QUE SEJAM REALIZADOS: (I) EM DESCUMPRIMENTO À PRESENTE POLÍTICA OU AOS TERMOS E CONDIÇÕES DE USO DA PLATAFORMA; E/OU (II) COM O USO E/OU DISPONIBILIZAÇÃO DAS INFORMAÇÕES PESSOAIS OU CADASTRAIS, INCLUINDO, MAS NÃO SE LIMITANDO À: DESCUMPRIMENTO DA PRESENTE POLÍTICA OU DOS TERMOS E CONDIÇÕES DE USO DA PLATAFORMA E/OU PREJUÍZOS CAUSADOS AO NSB - NOSSO SANGUE BOM OU A TERCEIROS. Caso o Usuário suspeite de que suas Informações Pessoais e/ou Cadastrais tenham se tornadas conhecidas por terceiros, por qualquer motivo, deverá comunicar imediatamente o NSB - Nosso Sangue Bom.
O NSB - Nosso Sangue Bom mantém implementadas inúmeras medidas de segurança, em atendimento aos padrões definidos na legislação vigente aplicável, com o fim de armazenar e proteger as Informações Pessoais fornecidas pelo Usuário ao NSB - Nosso Sangue Bom dentro do ambiente da Plataforma. Toda informação fornecida pelo Usuário no momento do cadastramento, bem como durante o acesso à Plataforma é assegurada por processos internos do NSB - Nosso Sangue Bom que garantem que nenhum terceiro tenha acesso a estas informações sem que tenha a devida autorização para tanto. É de conhecimento do Usuário que nenhuma transmissão de dados por meio da Internet é 100% segura. Consequentemente, embora o NSB - Nosso Sangue Bom ofereça acesso seguro à Plataforma visando proteger as informações do Usuário, o NSB - Nosso Sangue Bom não pode assegurar ou garantir a que as informações não serão acessadas, divulgadas, transmitidas, alteradas ou destruídas por violação de qualquer dos mecanismos de proteção e segurança utilizados pelo NSB - Nosso Sangue Bom. Desta forma, o NSB - Nosso Sangue Bom não será responsável por interceptações ilegais ou violação de quaisquer dos mecanismos de proteção e segurança, tampouco se responsabilizará pela utilização indevida das informações do Usuário obtidas por esses meios ou em decorrência do uso indevido da Plataforma, dos Serviços ou da Internet por parte do Usuário.
 
6. LIMITAÇÃO DE RESPONSABILIDADE
 
LIMITAÇÃO DE RESPONSABILIDADE. A RESPONSABILIDADE ASSUMIDA PELO NSB - NOSSO SANGUE BOM NA PRESENTE POLÍTICA É LIMITADA NA FORMA DAS DISPOSIÇÕES DOS TERMOS E CONDIÇÕES DE USO E DA PRESENTE POLÍTICA DA PLATAFORMA. O NSB - NOSSO SANGUE BOM E SEUS FORNECEDORES DE SERVIÇOS NÃO ASSUMEM NENHUMA RESPONSABILIDADE PERANTE O USUÁRIO OU QUALQUER TERCEIRO PELO USO, OU PELO USO INADEQUADO, DESTE APLICATIVO MÓVEL. ESSA LIMITAÇÃO INCLUI, MAS NÃO SE LIMITA: (A) DANOS INDIRETOS, INCIDENTAIS, CONSEQUENTES, ESPECIAIS, EXEMPLARES E PUNITIVOS, QUER A REIVINDICAÇÃO SEJA BASEADA EM CONTRATO, DANO OU OUTRO FATOR (MESMO QUE O NSB - NOSSO SANGUE BOM TENHA SIDO AVISADO DA POSSIBILIDADE DE TAIS DANOS); (B) APLICA-SE SE OS DANOS RESULTAREM DO USO OU DO USO INADEQUADO, DA CONFIANÇA DEPOSITADA NESTE APLICATIVO MÓVEL, DA INABILIDADE DE USAR ESTE APLICATIVO MÓVEL OU DA INTERRUPÇÃO, SUSPENSÃO OU TÉRMINO DESTE APLICATIVO MÓVEL (INCLUSIVE QUALQUER DANO DEVIDO A TERCEIROS); E (C) APLICA-SE NÃO OBSTANTE QUALQUER FALTA DE CONSECUÇÃO DA FINALIDADE ESSENCIAL DO APLICATIVO MÓVEL. O USUÁRIO RECONHECE E CONCORDA QUE AS LIMITAÇÕES PREVISTAS NESTA CLÁUSULA SÃO PARTE ESSENCIAL DESTA POLÍTICA.
 
7. INDENIZAÇÃO
 
O USUÁRIO INDENIZARÁ E ISENTARÁ DE RESPONSABILIDADE O NSB - NOSSO SANGUE BOM, CASO SEJA FEITA ALGUMA REIVINDICAÇÃO POR TERCEIROS EM DECORRÊNCIA DIRETA OU INDIRETA DE SUA CONDUTA (DO USUÁRIO), OU RELACIONADA AO SEU USO DESTE APLICATIVO MÓVEL, A QUALQUER VIOLAÇÃO ALEGADA DA POLÍTICA DE PRIVACIDADE DO APLICATIVO MÓVEL E DOS TERMOS DE USO OU À INFRAÇÃO DE QUALQUER LEI OU REGULAMENTAÇÃO APLICÁVEL. O NSB - Nosso Sangue Bom SE RESERVA O DIREITO, A CUSTO PRÓPRIO, DE ASSUMIR A DEFESA E O CONTROLE EXCLUSIVOS DE QUALQUER CASO SUJEITO A INDENIZAÇÃO POR USUÁRIO, MAS ISSO NÃO O ISENTARÁ DE SUAS OBRIGAÇÕES INDENIZATÓRIAS.
 
8. ACEITAÇÃO, ACESSO E ALTERAÇÕES À POLÍTICA DE PRIVACIDADE
 
8.1 Aceitação e acesso.
Realizando o seu Cadastro na Plataforma, o Usuário aceita, expressa e voluntariamente, os termos e condições da presente Política de Privacidade e dos Termos e Condições de Uso da Plataforma, concordando expressamente que suas Informações Pessoais sejam coletadas, processadas, acessadas, tratadas, armazenadas, utilizadas e divulgadas nos termos da presente Política e dos Termos e Condições de Uso da Plataforma.
 
8.2 Alteração.
A presente Política poderá ser alterada a qualquer momento: (i) a exclusivo critério do NSB - Nosso Sangue Bom, (ii) no atendimento da legislação vigente ou (iii) em cumprimento a ordens administrativas ou judiciais. As alterações realizadas na presente Política serão comunicadas ao Usuário por meio de avisos disponibilizados na própria Plataforma. Após a devida comunicação de alteração, a continuação na utilização dos Serviços e/ou da Plataforma pelo Usuário será considerada aceitação tácita às alterações da Política de Privacidade. Caso o Usuário não concorde com referidas alterações, deverá parar de utilizar os Serviços da Plataforma e solicitar o encerramento de seu cadastro de forma imediata.
 
9. PROPRIEDADE INTELECTUAL
 
As marcas, nomes, logotipos, nomes de domínio e demais sinais distintivos, bem como todo e qualquer conteúdo, desenho, arte ou layout publicado no Aplicativo Móvel, são de propriedade exclusiva do NSB - Nosso Sangue Bom e;ou da empresa desenvolvedora do Aplicativo Móvel. São vedados quaisquer atos ou contribuições tendentes à descompilação, engenharia reversa, modificação das características, ampliação, alteração, mesclagem ou incorporação em quaisquer outros programas ou sistemas. Enfim, toda e qualquer forma de reprodução, total ou parcial, permanente, temporária ou provisória, de forma gratuita ou onerosa, sob quaisquer modalidades, formas ou títulos do Aplicativo Móvel é expressamente vedada.
 
10. SANÇÕES
 
O USO DO APLICATIVO MÓVEL DO NSB - NOSSO SANGUE BOM DE FORMA INDEVIDA EM DESACORDO A ESTES TERMOS IMPLICARÁ A EXCLUSÃO DO CADASTRO DO USUÁRIO E A PROIBIÇÃO DA UTILIZAÇÃO DOS SERVIÇOS. SEUS DADOS SERÃO PRESERVADOS PARA USO DAS AUTORIDADES COMPETENTES, CASO O NSB - Nosso Sangue Bom SEJA NOTIFICADO OU ACIONADA PELA VIOLAÇÃO DE DIREITOS DE TERCEIROS DECORRENTE DO MAU USO DO SISTEMA. O USUÁRIO CONCORDA EM INDENIZAR O NSB - Nosso Sangue Bom RESPONSABILIZAÇÃO, RECLAMAÇÃO OU DEMANDA, POR QUAISQUER PREJUÍZOS DEVIDO A, OU RESULTANTES DA, SUA UTILIZAÇÃO DO APLICATIVO MÓVEL.
 
11. FORO
 
Todas as transações realizadas por meio do Aplicativo Móvel são regidas pelas leis da República Federativa do Brasil, independentemente de quaisquer disposições sobre conflitos de leis. O Usuário concorda expressamente que o foro exclusivo competente para qualquer alegação ou litígio com o NSB - Nosso Sangue Bom será o Foro da Comarca da cidade Salvador/BA, com expressa renúncia de qualquer outro, por mais privilegiado que seja, para dirimir dúvidas a respeito do presente Termo e da Política de Privacidade.


`;

  return (
    <ElementsOverlay overlayStyle={styles.overlay} {...rest}>
      <ScrollView>
        <Text style={styles.text}>{editado}</Text>
      </ScrollView>
      <Button title="Aceito" onPress={pressFunction} />
    </ElementsOverlay>
  );
}
