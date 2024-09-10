function clear_all() {
	document.getElementById("page_text_content").innerHTML = "";
	document.getElementById("page_text_content").style.display = "none";
	document.getElementById("page_document_content").setAttribute("data", "./Files/nocontent.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/nocontent.pdf");
	document.getElementById("page_document_content").style.display = "none";
}

function showPEC_demanda_espontanea() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Demanda Espontânea</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# ATENDIMENTO REALIZADO PELO(A) ACADÊMICO(A)<br>
			# RECEBO PACIENTE NA DEMANDA ESPONTÂNEA COM QP:<br>
			==> HDA:<br>
			==> HPP:<br>
			NEGA ALERGIA MEDICAMENTOSA;<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# COVID:<br>
			# INFLUENZA:<br><br>
			# EXAME FÍSICO:<br>
			==> BEG, BEN, LOTE, AAA, CORADO, HIDRATADO, EUPNEICO E EUCÁRDIACO<br>
			==> OROSCOPIA: MUCOSA NORMOCORADA, AUSENCIA DE PLACAS, EDEMA E HIPEREMIA<br>
			==> OTOSCOPIA: MEMBRANA TIMPÂNICA TRANSLÚCIDA, AUSÊNCIA DE ABAULAMENTO , HIPEREMIA<br>
			==> ACV: RCR, BCNF EM 2T, S/SOPROS<br>
			==> AR: MV+, S/ RA<br>
			==> ABD: FLÁCIDO, RHA +, INDOLOR A PALPAÇÃO SUPERFICIAL E PROFUNDA, AUSÊNCIA DE VCM E MASSAS PALPÁVEIS, DB-;<br>
			==> EXTREMIDADES: PULSOS PRESENTES, AMPLOS E SIMÉTRICOS, TEC &lt; 3 SEG<br>
			==> NEURO: GLASGOW 15, PUPILAS ISOFOTORREAGENTES.<br><br>
			==> DU: SEM QUEIXAS<br>
			==> TV: NI<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# SINAIS E SINTOMAS SUGESTIVOS DE<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# SOLICITO REALIZAÇÃO DE MRPA;<br>
			# SOLICITO REALIZAÇÃO DE CONTROLE GLICÊMICO;<br>
			# ORIENTO RETORNO EM CONSULTA AGENDADA PARA AVALIAÇÃO DE MRPA;<br>
			# ORIENTO RETORNO EM CONSULTA AGENDADA PARA AVALIAÇÃO DE CONTROLE GLICÊMICO;<br>
			# FOI EMITIDO UM ATESTADO MÉDICO PARA ACOMPANHANTE DE UM DIA NESTE ATENDIMENTO;<br>
			# ORIENTAÇÕES GERAIS E SINAIS DE ALARME;<br>
			# ORIENTO RETORNO SE PERSISTÊNCIA OU SURGIMENTO DE NOVOS SINTOMAS.
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_consulta_agendada() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Consulta Agendada</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# ATENDIMENTO REALIZADO PELO(A) ACADÊMICO(A)<br>
			# RECEBO PACIENTE EM CONSULTA AGENDADA COM QP:<br>
			==> HDA:<br>
			==> HPP:<br>
			***** AFIRMA: ;<br>
			***** NEGA: ;<br>
			***** MUC: ;<br>
			***** NEGA ALERGIA MEDICAMENTOSA, COMORBIDADES, MUC;<br>
			***** NEGA ETILISMO E TABAGISMO.<br>
			==> HF: ;<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# COVID:<br>
			# INFLUENZA:<br><br>
			# EXAME FÍSICO:<br>
			==> BEG, BEN, LOTE, AAA, CORADO, HIDRATADO, EUPNEICO E EUCÁRDIACO<br>
			==> OROSCOPIA: MUCOSA NORMOCORADA, AUSENCIA DE PLACAS, EDEMA E HIPEREMIA<br>
			==> OTOSCOPIA: MEMBRANA TIMPÂNICA TRANSLÚCIDA, AUSÊNCIA DE ABAULAMENTO , HIPEREMIA<br>
			==> ACV: RCR, BCNF EM 2T, S/SOPROS<br>
			==> AR: MV+, S/ RA<br>
			==> ABD: FLÁCIDO, RHA +, INDOLOR A PALPAÇÃO SUPERFICIAL E PROFUNDA, AUSÊNCIA DE VCM E MASSAS PALPÁVEIS, DB-;<br>
			==> EXTREMIDADES: PULSOS PRESENTES, AMPLOS E SIMÉTRICOS, TEC &lt; 3 SEG<br>
			==> NEURO: GLASGOW 15, PUPILAS ISOFOTORREAGENTES.<br><br>
			==> DU: SEM QUEIXAS<br>
			==> TV: NI<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# SINAIS E SINTOMAS SUGESTIVOS DE<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# SOLICITO REALIZAÇÃO DE MRPA;<br>
			# SOLICITO REALIZAÇÃO DE CONTROLE GLICÊMICO;<br>
			# ORIENTO RETORNO EM CONSULTA AGENDADA PARA AVALIAÇÃO DE MRPA;<br>
			# ORIENTO RETORNO EM CONSULTA AGENDADA PARA AVALIAÇÃO DE CONTROLE GLICÊMICO;<br>
			# FOI EMITIDO UM ATESTADO MÉDICO PARA ACOMPANHANTE DE UM DIA NESTE ATENDIMENTO;<br>
			# ORIENTAÇÕES GERAIS E SINAIS DE ALARME;<br>
			# ORIENTO RETORNO SE PERSISTÊNCIA OU SURGIMENTO DE NOVOS SINTOMAS.
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_evasão() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Evasão</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# PACIENTE NÃO RESPONDEU AOS CHAMADOS<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# NÃO AVALIADO<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# NÃO AVALIADO<br><br>
			# CID-10: Z532<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# NÃO AVALIADO
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_renovacao_de_receita() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Renovação de Receita</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# ATENDIMENTO REALIZADO PELO(A) ACADÊMICO(A)<br>
			# RENOVAÇÃO DE RECEITUÁRIO DE USO CONTÍNUO. PACIENTE NÃO COMPARECE À UNIDADE.<br><br>
			# MOTIVO DA CONSULTA CIAP-2: 50<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# NÃO AVALIADO<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# NÃO AVALIADO<br><br>
			# CID-10: Z760<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# RENOVO RECEITUÁRIO DE USO CONTÍNUO
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_pre_natal() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Pré-Natal</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# ATENDIMENTO REALIZADO PELO(A) ACADÊMICO(A)<br>
			# GESTANTE COMPARECE A UNIDADE PARA ACOMPANHAMENTO DE PRÉ-NATAL;<br>
			# RELATA BOA MOVIMENTAÇÃO FETAL E ACEITAÇÃO ALIMENTAR<br>
			==> HDA:<br>
			***** GESTANTE ASSINTOMÁTICA, NEGA SANGRAMENTOS, CORRIMENTO VAGINAL, PERDA DE LÍQUIDOS, QUEIXAS URINÁRIAS, ALTERAÇÕES INTESTINAIS.<br>
			***** RN?<br>
			***** TRABALHA FORA DE CASA:<br>
			***** HOP:<br>
			***** GPA<br>
			***** IG - DUM S+D - DPP | USG S+D (USGTV - S +D) - DPP<br>
			***** TS:<br>
			***** SOROLOGIAS NÃO REAGENTE, IMUNE Á TOXOPLASMOSE, RUBÉOLA, CITOMEGALOVÍRUS, CHAGAS.<br>
			==> HPP:<br>
			***** NEGA TABAGISMO, ETILISMO, COMORBIDADES, MUC, E ALERGIAS;<br>
			***** CIRURGIAS PRÉVIAS:<br>
			***** FEZ USO DO ÁCIDO FÓLICO ATÉ A 12ª SEMANA DE GESTAÇÃO<br>
			***** EM USO: ;<br>
			==> HF: ;<br>
			==> AFIRMA/NEGA COMPARECIMENTO EM CONSULTA ODONTOLÓGICA;<br><br>
			# MOTIVO DA CONSULTA<br>
			==> A98 MEDICINA PREVENTIVA/MANUTENÇÃO DA SAÚDE<br>
			==> W78 GRAVIDEZ<br>
			==> 49 OUTROS PROCEDIMENTOS PREVENTIVOS<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# EXAME FÍSICO:<br>
			==> BEG, BEN, LOTE, AAA, CORADA, HIDRATADA, EUPNEICA E EUCÁRDIACA<br>
			==> OROSCOPIA: MUCOSA NORMOCORADA, AUSENCIA DE PLACAS, EDEMA E HIPEREMIA<br>
			==> OTOSCOPIA: MEMBRANA TIMPÂNICA TRANSLÚCIDA, AUSÊNCIA DE ABAULAMENTO , HIPEREMIA<br>
			==> ACV: RCR, BCNF EM 2T, S/SOPROS<br>
			==> AR: MV+, S/ RA<br>
			==> ABD: FLÁCIDO, RHA +, INDOLOR A PALPAÇÃO SUPERFICIAL E PROFUNDA, AUSÊNCIA DE VCM E MASSAS PALPÁVEIS, DB-;<br>
			==> EXTREMIDADES: PULSOS PRESENTES, AMPLOS E SIMÉTRICOS, TEC &lt; 3 SEG<br>
			==> NEURO: GLASGOW 15, PUPILAS ISOFOTORREAGENTES.<br><br>
			==> DU: SEM QUEIXAS<br>
			==> TV: NI<br><br>
			# EXAMES COMPLEMENTARES:<br>
			==> USG TRANSVAGINAL:<br>
			***** PRESENÇA DE SACO GESTACIONAL NORMO-INSERIDO, COM FORMA REGULAR, MEDINDO: LONG.: ,00 MM X ANT. POST.: ,00 MM X TRANS.: ,00 MM.<br>
			***** EMBRIÃO PRESENTE, BCF BPM, CCN MEDINDO ,00 MM;<br>
			***** HD: GRAVIDEZ TÓPICA, ÚNICA, S + D.<br>
			==> USG OBSTÉTRICA:<br>
			***** FETO EM APRESENTAÇÃO CEFÁLICA, MF +, BCF BPM;<br>
			***** PESO PROVÁVEL G;<br>
			***** ESTATURA CM;<br>
			***** PLACENTA POSTERIOR, GRAU ;<br>
			***** LÍQUIDO AMNIÓTICO NORMAL;<br>
			***** HD: GRAVIDEZ TÓPICA, ÚNICA.<br>
			==> USG MORFOLÓGICO:<br>
			***** FETO EM APRESENTAÇÃO CEFÁLICA, DORSO Á DIREITA, CRÂNIO FETAL E S.N.C.: VISUALIZADOS, DENTRO DA NORMALIDADE;<br>
			***** DIÂMETRO BIPARIETAL DE MM;<br>
			***** DIÂMETRO OCCIPTO-FRONTAL DE MM;<br>
			***** CIRCUNFERÊNCIA CRANIANA COM MM;<br>
			***** DIÂMETRO TRANSVERSAL CEREBELAR DE MM;<br>
			***** FACE FETAL: VISUALIZADA, DENTRO DA NORMALIDADE;<br>
			***** DISTÂNCIA INTER-ORBITÁRIA EXTERNA DE MM;<br>
			***** PESCOÇO FETAL: VISUALIZADO, DENTRO DA NORMALIDADE;<br>
			***** COLUNA FETAL: VISUALIZADA, DENTRO DA NORMALIDADE;<br>
			***** TÓRAX: VISUALIZADO, DENTRO DA NORMALIDADE;<br>
			***** CORAÇÃO: VISUALIZADO, DENTRO DA NORMALIDADE;<br>
			***** BCF BPM, ABDOME FETAL: VISUALIZADO, DENTRO DA NORMALIDADE;<br>
			***** CIRCUNFERÊNCIA ABDOMINAL MM;<br>
			***** VIAS URINÁRIAS: VISUALIZADAS, DENTRO DA NORMALIDADE;<br>
			***** MEMBROS FETAIS: VISUALIZADAS, DENTRO DA NORMALIDADE;<br>
			***** SEXO FETAL PROVÁVEL: MASCULINO;<br>
			***** ESTATURA FETAL: ;<br>
			***** PESO FETAL ESTIMADO: GRAMAS;<br>
			***** PLACENTA: ANTERIOR, GRAU;<br>
			***** LÍQUIDO AMNIÓTICO NORMAL;<br>
			***** HD: GRAVIDEZ TÓPICA, ÚNICA, S + D.<br><br>
			# EXAMES LABORATORIAIS:<br>
			==> AGUARDO RESULTADOS: ;<br>
			==> HEMOGRAMA:<br>
			***** HEMOGLOBINA g/dl<br>
			***** HEMATÓCRITO %<br>
			***** LEUCÓCITOS % mm3<br>
			***** BASTONETES % mm3<br>
			***** SEGMENTADOS % mm3<br>
			***** LINFÓCITOS % mm3<br>
			***** PLAQUETAS /mm3;<br>
			==> GLICEMIA DE JEJUM: mg/dl<br>
			==> CURVA GLICÊMICA:<br>
			***** AMOSTRA DE JEJUM: mg/dl<br>
			***** AMOSTRA DE 30 MINUTOS: mg/dl<br>
			***** AMOSTRA DE 60 MINUTOS: mg/dl<br>
			***** AMOSTRA DE 90 MINUTOS: mg/dl<br>
			***** AMOSTRA DE 120 MINUTOS: mg/dl<br>
			==> E.A.S.:<br>
			***** COR<br>
			***** ASPECTO<br>
			***** DENSIDADE<br>
			***** SUBST. LEUCOCITÁRIA<br>
			***** ÁCIDO ASCÓRBICO<br>
			***** CÉLULAS EPITELIAIS /ml<br>
			***** LEUCÓCITOS /ml<br>
			***** HEMÁCIAS /ml<br>
			***** FLORA BACTERIANA<br>
			***** CRISTAIS<br>
			***** OBS. ;<br>
			==> UROCULTURA:<br>
			***** PESQUISA DE BACTÉRIAS:<br>
			***** LEUCOCITÚRIA:<br>
			***** CONTAGEM DE COLÔNIAS: UFC/ml<br>
			***** GERME (S) ISOLADO (S): AUSÊNCIA DE CRESCIMENTO DE FLORA BACTERIANA AERÓBICA<br>
			***** FLORA BACTERIANA ACENTUADA DE PADRÃO COCOBACILAR<br>
			==> ANTIBIOGRAMA:<br>
			***** BACTÉRIA ISOLADA: ESCHERICHIA COLI<br>
			***** SENSÍVEL/RESISTÊNTE:<br>
			------- AMICACINA<br>
			------- NORFLOXACINO<br>
			------- GENTAMICINA<br>
			------- CIPROFLOXACINO<br>
			------- CEFALEXINA<br>
			------- AMOXILINA/AC. CLAVULANATO<br>
			------- CEFEPIME<br>
			------- LEVOFLOXACINO<br>
			------- MEROPERÉM<br>
			------- CEFUROXINA<br>
			------- AMPICILINA<br>
			------- CEFTAZIDIMA<br>
			------- TRIMETOPRIM-SURF<br>
			------- NITROFURANTOINA<br>
			------- FOSFOMICINA<br>
			------- ÁCIDO NALIDÍXICO<br>
			------- IMIPENEM<br>
			------- OFLOXACINO<br>
			------- SULFAMETOXAZOL+TRIMETOPRIM<br>
			***** NÃO HOUVE CRESCIMENTO DE BACTÉRIAS<br>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# PRÉ NATAL DE BAIXO RISCO.<br>
			# PRÉ NATAL DE ALTO RISCO.<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# ORIENTO:<br>
			==> QUANTO AOS SINAIS DE ALERTA E SE ENCAMINHAR PARA O HOSPITAL MATERNO INFANTIL AUGUSTA BASTOS (HMIAB) CASO APRESENTE OS MESMOS;<br>
			==> IMPORTÂNCIA DA INGESTA HÍDRICA, DIMINUIR O CONSUMO DE SAL E AÇÚCAR, ALIMENTAÇÃO SAUDÁVEL;<br>
			==> MEDIDAS DE PREVENÇÃO AO COVID-19 E MOSQUITO AEDES AEGYPTI;<br>
			==> IMPORTÂNCIA DA PARTICIPAÇÃO DO PARCEIRO NAS CONSULTAS DE PRÉ NATAL E REALIZAÇÃO DO PRÉ NATAL DO PARCEIRO;<br>
			==> SOBRE PRÉ NATAL ODONTOLÓGICO E ENTREGUE FOLHETO IMPRESSO.<br>
			==> ORIENTAÇÕES GERAIS;<br>
			# CHECO:<br>
			==> 1° FASE TESTE DA MAMÃE<br>
			==> 2° FASE TESTE DA MAMÃE<br>
			==> USG TRANSVAGINAL/OBSTÉTRICA<br>
			==> EXAMES LABORATORIAIS<br>
			# SOLICITO/AGUARDO RESULTADO:<br>
			==> 1° FASE TESTE DA MAMÃE<br>
			==> 2° FASE TESTE DA MAMÃE<br>
			==> USG TRANSVAGINAL/OBSTÉTRICA<br>
			==> EXAMES LABORATORIAIS<br>
			# REALIZO:<br>
			==> PREENCHIMENTO E ENTREGA DA CADERNETA DA GESTANTE;<br>
			==> COLETA DE MATERIAL;<br>
			***** TR SÍFILIS, HIV, HBV, HEPATITE C, AMBOS COM RESULTADOS NÃO REAGENTE;<br>
			***** 1° FASE TESTE DA MAMÃE;<br>
			***** 2° FASE TESTE DA MAMÃE;<br>
			# PRESCREVO:<br>
			==> USO ORAL DE SULFATO FERROSO 40MG - 01 COMPRIMIDO AO DIA 30 MIN ANTES DO ALMOÇO COM SUCO DE LARANJA OU LIMÃO, FAZER USO ATÉ 3 MESES APÓS A GESTAÇÃO;<br>
			==> ÁCIDO FÓLICO 5 MG - TOMAR 01 COMPRIMIDO ATÉ 12° SEMANA DE GESTAÇÃO;<br>
			# ENCAMINHO:<br>
			==> PARA SALA DE VACINA;<br>
			==> PARA CONSULTA ODONTOLÓGICA;<br>
			==> PARA CONSULTA NUTRICIONAL;<br>
			# RETORNO PARA CUIDADO CONTINUADO/PROGRAMADO EM .
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_puericultura() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Puericultura</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# ATENDIMENTO REALIZADO PELO(A) ACADÊMICO(A)<br>
			# CONSULTA AGENDADA PARA CUIDADO CONTINUADO/PROGRAMADO DE PUERICULTURA DO LACTENTE ACOMPANHADO(A) ... CUJO DATA DE NASCIMENTO É ... RELATADA NO PRONTUÁRIO DA MÃE, POIS O MESMO AINDA NÃO POSSUI CNS.<br>
			# RESPONSÁVEL PELO LACTENTE RELATA QUEIXA:<br>
			==> HDA:
			# NEGA QUEIXAS E ACIDENTES DOMÉSTICOS;<br>
			# REALIZAÇÃO DE LAVAGEM NASAL COM SORO FISIOLÓGICO;<br>
			# REALIZAÇÃO DE HIGIENE BUCAL DO LACTENTE;<br>
			# QUEDA DO COTO UMBILICAL APÓS … DIAS DO NASCIMENTO. NEGA ALTERAÇÕES;<br>
			# BOM PADRÃO DE SONO NOTURNO E DIURNO;<br>
			# POSIÇÃO NO SONO QUANDO DEITADO NO BERÇO DE BARRIGA PARA CIMA E CABEÇA LATERALIZADA;<br>
			# ALEITAMENTO MATERNO EXCLUSIVO E PEGA MAMÁRIA SATISFATÓRIA;<br>
			# ALEITAMENTO MATERNO E LEITE ARTIFICIAL ...;<br>
			# LEITE ARTIFICIAL …;<br>
			# FUNCIONAMENTO DO INTESTINO E FISIOLÓGICOS ADEQUADOS E CÓLICAS COM MENOS FREQUÊNCIA;<br>
			# NEGA CÓLICAS;<br>
			# HIGIENE E CUIDADOS GERAIS: ;<br>
			# EM USO DE: ;<br><br>
			# MOTIVO DA CONSULTA<BR>MEDICINA PREVENTIVA/MANUTENÇÃO DA SAÚDE<br>CONSULTA AGENDADA PARA CUIDADO CONTINUADO/PROGRAMADO DE PUERICULTURA DO LACTENTE.<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			#REGISTRO AO NASCER:<br>
			==> TIPO DE PARTO...,<br>
			==> IG S+D,<br>
			==> COMPRIMENTO CM,<br>
			==> PERÍMETRO CEFÁLICO CM,<br>
			==> PERÍMETRO TORÁCICO CM,<br>
			==> PERÍMETRO ABDOMINAL CM,<br>
			==> PESO G,<br>
			==> APGAR 1' , APGAR 5'.<br>
			# PESO ALTA G.<br>
			# FOI REALIZADO:<br>
			==> TESTE DO CORAÇÃOZINHO -<br>
			***** MSD: SAT / FC BPM<br>
			***** MID: SAT / FC BPM<br>
			==> TESTE DO PEZINHO -<br>
			***** TSH NEONATAL UU/ML<br>
			***** FENILALANINA (PKU) MG/DL<br>
			***** 17OHP NEONATAL NG/ML<br>
			***** IRT NEONATAL NG/ML<br>
			***** HEMOGLOBINOPATIAS<br>
			***** BIOTINIDASE NEONATAL<br>
			***** TOXOPLASMOSE IGM NEONATAL<br>
			==> TESTE DO OLHINHO -<br>
			==> TESTE DA ORELHINHA -<br>
			# RN APRESENTA:<br>
			==> VACINAS DE ACORDO COM O CALENDÁRIO;<br>
			==> PESO: G<br>
			==> COMPRIMENTO: CM<br>
			==> PERÍMETRO CEFÁLICO: CM<br>
			==> PERÍMETRO TORÁCICO: CM<br>
			==> PERÍMETRO ABDOMINAL: CM<br>
			==> PERÍMETRO DA PANTURRILHA: CM<br>
			==> TEMPERATURA: C°<br>
			==> FREQUÊNCIA CARDÍACA: BPM<br>
			==> FREQUÊNCIA RESPIRATÓRIA: MPM<br>
			# ALTERAÇÕES FENOTÍPICAS AUSENTES;<br>
			# FATORES DE RISCO AUSENTES;<br>
			# MARCOS ADEQUADOS PARA IDADE / ALERTA PARA O DESENVOLVIMENTO / PROVÁVEL ATRASO NO DESENVOLVIMENTO;<br>
			# EXAME FÍSICO:<br>
			==> BEG, BEN, AAA, CORADO E HIDRATADO;<br>
			==> OROSCOPIA: MUCOSA NORMOCORADA, AUSENCIA DE PLACAS, EDEMA E HIPEREMIA;<br>
			==> ACV: RCR, BCNF EM 2T, S/ SOPROS;<br>
			==> AR: MV+, S/ RA;<br>
			==> PERÍMETRO TORÁCICO: CM<br>
			==> ABD: FLÁCIDO, RHA +, INDOLOR A PALPAÇÃO SUPERFICIAL E PROFUNDA, AUSENCIA DE VCM E MASSAS PALPÁVEIS, DB-;<br>
			==> EXTREMIDADES: TEC < 3 SEG;<br>
			==> CABEÇA: ÍNTEGRA, SEM RETRAÇÃO OU ABAULAMENTO;<br>
			==> FONTANELAS: ÍNTEGRA, NORMOTENSA;<br>
			==> ABERTURA OCULAR NORMAL, PUPILAS NORMAIS, NÃO APRESENTA ESTRABISMO, SEGUE COM O OLHAR;<br>
			==> LÍNGUA E FRÊNULO SEM ALTERAÇÕES E MOVIMENTAÇÃO ADEQUADA;<br>
			==> PESCOÇO ÍNTEGRO, LINFONODOS NÃO PALPÁVEIS;<br>
			==> PEGA MAMÁRIA SATISFATÓRIA;<br>
			==> UMBIGO: ÍNTEGRO, SEM ALTERAÇÕES;<br>
			==> GENITÁLIA: ÍNTEGRA, CORADA, HIDRATADA, PREPÚCIO LEVEMENTE RETRÁTIL.<br>
			***** TESTÍCULOS TÓPICOS E FIMOSE FISIOLÓGICA;<br>
			***** TESTÍCULOS SIMÉTRICOS OU DISCRETAMENTE ASSIMÉTRICOS NA BOLSA ESCROTAL;<br>
			***** TESTÍCULOS AUSENTES EM BOLSA ESCROTAL, ENCONTRA-SE EM REGIÃO PÉLVICA;<br>
			==> GENITÁLIA: ÍNTEGRA, CORADA, HIDRATADA. CLITÓRIS, PEQUENOS E GRANDES LÁBIOS IGUALMENTE DESENVOLVIDOS. SEM ALTERAÇÕES;<br>
			# NÃO APRESENTA SINAIS DE ALERTA;<br>
			# APRESENTA COMO SINAIS DE ALERTA: ;<br>
			# HIGIENE E CUIDADOS GERAIS ...;<br>
			# NÃO APRESENTA SINAIS DE VIOLÊNCIA/NEGLIGÊNCIAS;<br>
			# FOI OBSERVADO LAÇO AFETIVO SATISFATÓRIO DURANTE A CONSULTA.<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# DESENVOLVIMENTO FÍSICO, MOTOR, DADOS ANTROPOMÉTRICOS E SSVV DENTRO DOS PADRÕES ESPERADOS PARA A IDADE.<br>
			PROBLEMA E / OU CONDIÇÃO DETECTADA<br><br>
			MEDICINA PREVENTIVA / MANUTENÇÃO DA SAÚDE – A98<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# CHECO:<br>
			==> TESTE DO CORAÇÃOZINHO;<br>
			==> TESTE DO PEZINHO;<br>
			==> TESTE DA ORELHINHA;<br>
			==> TESTE DO OLHINHO;<br>
			# AGUARDO RESULTADO:<br>
			==> TESTE DO CORAÇÃOZINHO;<br>
			==> TESTE DO PEZINHO;<br>
			==> TESTE DA ORELHINHA;<br>
			==> TESTE DO OLHINHO;<br>
			# RESPONSÁVEL POR LACTENTE ORIENTADA:<br>
			==> SOBRE REALIZAÇÃO DE LAVAGEM NASAL COM SORO FISIOLÓGICO;<br>
			==> SOBRE POSIÇÃO NO SONO QUANDO DEITADO NO BERÇO DE BARRIGA PARA CIMA E CABEÇA LATERALIZADA;<br>
			==> SOBRE SAÚDE E HIGIENE BUCAL DO LACTENTE;<br>
			==> SOBRE IMPORTÂNCIA DA VACINAÇÃO;<br>
			==> MEDIDAS DE PREVENÇÃO AO COVID-19 E MOSQUITO AEDES AEGYPTI;<br>
			==> QUE CONTINUE ESTIMULANDO O LACTENTE;<br>
			==> SOBRE ORIENTAÇÕES GERAIS E OS SINAIS DE ALERTA PARA RETORNO ANTECIPADO;<br>
			==> QUE RETORNE PARA CONSULTA AGENDADA COM MÉDICO INTERCALADO COM ENFERMEIRO PARA CUIDADO CONTINUADO/PROGRAMADO.<br>
			# CONDUTA:<br>
			==> RETORNO PARA CUIDADO CONTINUADO / PROGRAMADO<br><br>
			# RESULTADO DE EXAMES NA PUERICULTURA<br>
			==> TESTE DO PEZINHO - 0202110052<br>
			***** TSH NEONATAL UU/ML<br>
			***** FENILALANINA (PKU) MG/DL<br>
			***** 17OHP NEONATAL NG/ML<br>
			***** IRT NEONATAL NG/ML<br>
			***** HEMOGLOBINOPATIAS<br>
			***** BIOTINIDASE NEONATAL<br>
			***** TOXOPLASMOSE IGM NEONATAL<br>
			==> OXIMETRIA DE PULSO (TESTE DO CORAÇÃOZINHO) - 0211020079<br>
			***** MSD: SAT / FC BPM<br>
			***** MID: SAT / FC BPM<br>
			==> TESTE DA ORELHINHA (EOA) - 0211070149<br>
			==> TESTE DO OLHINHO (TRV)
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_puerperio() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC Puerpério</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			PUÉRPERA COMPARECE À UNIDADE PARA CONSULTA DE PUERPÉRIO DE PARTO NORMAL/CESÁRIA COM IG S + D<br>
			HDA: ASSINTOMÁTICA, NEGA SANGRAMENTOS, CORRIMENTO VAGINAL, PERDA DE LÍQUIDOS, QUEIXAS URINÁRIAS; ALTERAÇÕES INTESTINAIS. CARACTERÍSTICAS DO SANGRAMENTO SIC: VERMELHO ESCURO COM CONSISTÊNCIA ESPESSA E QUE, AS VEZES, APRESENTA COÁGULOS DE SANGUE.<br>
			HPP:<br>
			MEDICAMENTOS EM USO CPM:<br><br>
			*MOTIVO DA CONSULTA<br>
			=> A98 MEDICINA PREVENTIVA/MANUTENÇÃO DA SAUDE<br>
			=> W90 PARTO SEM COMPLICAÇÕES DE NASCIDO VIVO<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			=> BEG, BEN, LOTE, AAA, CORADA, HIDRATADA, EUPNEICA E EUCÁRDICA<br>
			=> MV+S/RA | BNRNF EM 2T S/SOPROS<br>
			=> MAMAS DENTRO DA NORMALIDADE;<br>
			=> INVOLUÇÃO UTERINA ADEQUADA;<br>
			=> FOP: APRESENTA CICATRIZAÇÃO ADEQUADA SEM SINAIS FLOGÍSTICOS.<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			PUERPÉRIO NÃO APRESENTA SINAIS E SINTOMAS DE COMPLICAÇÕES<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			=> ORIENTO:<br>
			QUANTO A CONTRAÇÃO DO ÚTERO SER ACELERADA PELA AMAMENTAÇÃO – O QUE É POSITIVO – E PODE SER ACOMPANHADA POR CÓLICAS E PEQUENOS SANGRAMENTOS NO PÓS PARTO, CUJO NOME TÉCNICO É LÓQUIO, É NORMAL E DURA EM MÉDIA 5 SEMANAS, SENDO CARACTERIZADO PELA SAÍDA DE SANGUE VERMELHO ESCURO COM CONSISTÊNCIA ESPESSA E QUE, POR VEZES, APRESENTA COÁGULOS DE SANGUE;<br>
			EM CASO DE SANGRAMENTO EXAGERADO E DOR INTENSA SE ENCAMINHAR PARA O PRONTO ATENDIMENTO;<br>
			QUANTO AOS SINAIS E SINTOMAS FLOGÍSTICO DE INFECÇÃO/INFLAMAÇÃO;<br>
			IMPORTÂNCIA DA INGESTA HÍDRICA E ALIMENTAÇÃO SAUDÁVEL;<br>
			MEDICAS DE PREVENÇÃO AO COVID-19 E MOSQUITO AEDES AEGYPTI;<br>
			ORIENTAÇÕES GERAIS;<br>
			RETORNO COM RESULTADO DE EXAMES;<br>
			=> SOLICITO:<br>
			EXAMES LABORATORIAIS;<br>
			=> PRESCREVO:<br>
			USO ORAL DE SULFATO FERROSO 40MG - 01 COMPRIMIDO AO DIA 30 MIN ANTES DO ALMOÇO COM SUCO DE LARANJA OU LIMÃO, FAZER USO ATÉ 3 MESES APÓS A GESTAÇÃO;<br>
			=> FORNEÇO CPM 01 CX DE AMOSTRA GRÁTIS DE PÉROLA - TOMAR 01 CP AO DIA NO MESMO HORÁRIO SEM PAUSA;<br>
			=> SOLICITO IMPLANON PARA DEPARTAMENTO RESPONSÁVEL.<br>
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showGuiaFarmaceutico() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/guia-farmacêutico.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/guia-farmacêutico.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}


function showCID_10() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/lista-CID-10.txt");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/lista-CID-10.txt");
	document.getElementById("page_document_content").style.display = "inline";
}

function showCID_10_2() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/CID-10.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/CID-10.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showCIAP_2() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/CIAP-2.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/CIAP-2.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showSIGTAP() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/tabela-sigtap-201904-formatada.txt");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/tabela-sigtap-201904-formatada.txt");
	document.getElementById("page_document_content").style.display = "inline";
}

function showSIGTAP2() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/SIGTAP.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/SIGTAP.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showMRPA_Bandeirantes() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/mapa-pressão.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/mapa-pressão.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showMapaGlicemico_Bandeirantes() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/mapa-glicemia.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/mapa-glicemia.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showMRPA_Benjamin() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/MRPA.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/MRPA.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function show_inventario_ansiedade_beck() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/inventário-ansiedade-beck.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/inventário-ansiedade-beck.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function show_inventario_depressao_beck() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/inventário-depressao-beck.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/inventário-depressao-beck.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function show_escala_de_bristol() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/escala-de-bristol.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/escala-de-bristol.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function show_m_chat_rf() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "center";
	document.getElementById("page_content").style.alignItems = "center";
	document.getElementById("page_document_content").setAttribute("data", "./Files/m-chat-rf.pdf");
	document.getElementById("page_document_content_path").setAttribute("href", "./Files/m-chat-rf.pdf");
	document.getElementById("page_document_content").style.display = "inline";
}

function showReceitaSOSGestante() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">Receita SOS Gestante</h1></center>
		<br>
		<h1>Uso oral:</h1>
		<br>
		<ol>
			<li>
				DRAMIN___________________________________01 CAIXA
				<br>
				TOMAR 01 CP DE 08/08 HORAS, SE SENTIR NÁUSEAS OU VÔMITOS.
			</li>
			<br>
			<li>
				PARACETAMOL 500 MG_______________________01 CAIXA
				<br>
				TOMAR 01 CP DE 06/06 HORAS, SE DOR /FEBRE.
			</li>
			<br>
			<li>
				BUSCOPAN SIMPLES_________________________01 CAIXA
				<br>
				TOMAR 01 CP DE 08/08 HORAS, SE CÓLICA.
			</li>
			<br>
			<li>
				SIMECO PLUS _____________________________01 FRASCO
				<br>
				TOMAR 10 ML DE 08/08 HORAS, SE QUEIMAÇÃO.
			</li>
			<br>
			<li>
				SULFATO FERROSO 40MG ____________________CONTÍNUO
				<br>
				TOMAR 01 CP AO DIA ATE 3 MESES APÓS A GESTAÇÃO.
			</li>
		</ol>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showReceitaDengue() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">Receita Dengue</h1></center>
		<br>
		<h1>Uso oral:</h1>
		<br>
		<ol>
			<li>
				ONDANSETRONA, CLORIDRATO 8MG_____________01 CAIXA
				<br>
				TOMAR 01 CP DE 08/08 HORAS, SE SENTIR NÁUSEAS OU VÔMITOS.
			</li>
			<br>
			<li>
				SRO 27,9G________________________________10 SACHÊS
				<br>
				DILUIR 2 SANCHES EM 2 LITROS DE ÁGUA FILTRADA OU FERVIDA. TOMAR 1 LITRO E 300 ML DURANTE TODO O DIA. DURANTE 5 DIAS.
			</li>
			<br>
			<li>
				DIPIRONA SÓDICA 1G_______________________01 CAIXA
				<br>
				TOMAR 01 CP DE 06/06 HORAS, SE DOR OU FEBRE.
			</li>
			<br>
			<li>
				RECOMENDAÇÕES:
				<br>
				TOMAR DURANTE O DIA 2,5 L DE LÍQUIDOS (ÁGUA, SUCO OU ÁGUA DE COCO) DURANTE 5 DIAS.
			</li>
		</ol>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showReceitaGastroenterite() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">Receita Dengue</h1></center>
		<br>
		<h1>Uso oral:</h1>
		<br>
		<ol>
			<li>
				SRO 27,9G________________________________08 SACHÊS
				<br>
				DILUIR 1 SANCHES EM 1 LITROS DE ÁGUA FILTRADA OU FERVIDA. TOMAR 200 ML APÓS CADA EVACUAÇÃO.
			</li>
			<br>
			<li>
				SACCHAROMYCES BOULARDII-17 100 MG________01 CAIXA
				<br>
				TOMAR 01 CP DE 12/12 HORAS DURANTE 7 DIAS.
			</li>
			<br>
			<li>
				RACECADOTRILA 100 MG_____________________01 CAIXA
				<br>
				TOMAR 01 CP DE 08/08 HORAS DURANTE 5 DIAS.
			</li>
		</ol>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}

function showPEC_COP() {
	clear_all();
	document.getElementById("page_content").style.textAlign = "left";

	document.getElementById("page_text_content").innerHTML = `
		<center><h1 class="title">PEC COP</h1></center>
		<br>
		<h1>Subjetivo</h1>
		<br>
		<p>
			# FEZ O MAMOGRAFIA ALGUMA VEZ:<br>
			# PACIENTE COMPARECE À UNIDADE PARA COLETA DE MATERIAL CITOPATOLÓGICO;<br>
			# PACIENTE RELATA:<br>
			==> HDA: PACIENTE ASSINTOMÁTICA, NEGA SANGRAMENTOS, NEGA CORRIMENTO VAGINAL, NEGA QUEIXAS URINÁRIAS;<br>
			==> CUIDADOS PARA A REALIZAÇÃO DO COP:<br>
			==> MOTIVO DO EXAME:<br>
			==> FEZ O COP ALGUMA VEZ:<br>
			==> ALTERAÇÃO:<br>
			==> USA CONTRACEPTIVO:<br>
			==> USA PRESERVATIVO:<br>
			==> DUM:<br>
			==> CICLO MENSTRUAL:<br>
			==> FLUXO MENSTRUAL:<br>
			==> MENARCA:<br>
			==> SEXARCA:<br>
			==> QUANTIDADE DE PARCEIROS:<br>
			==> QUANTIDADE DE PARCEIROS ATUALMENTE:<br>
			==> GPA:<br>
			==> INTERVALO INTERPARTAL:<br>
			==> INTERCORRÊNCIA NA GRAVIDEZ, PARTO E PUERPÉRIO:<br>
			==> AMAMENTAÇÃO: AFIRMA, PERÍODO MAIOR QUE 6 MESES;<br>
			# HPP:<br>
			=> CIRURGIAS: LAQUEADURA, SALPINGECTOMIA, HISTERECTOMIA;<br>
			# HF:<br>
			=> REALIZA EXAMES GINECOLÓGICOS DE ROTINA:<hr>
		</p>
		<h1>Objetivo</h1>
		<br>
		<p>
			# AO EXAME FÍSICO:<br>
			==> BEG, BEN, LOTE, AAA, CORADA, HIDRATADA, EUPNEICA E EUCÁRDICA;<br>
			==> EXTREMIDADES: PULSOS PRESENTES, AMPLOS E SIMÉTRICOS, TEC < 3 SEG;<br>
			# AO EXAME GINECOLÓGICO:<br>
			==> VULVA E PERÍNEO SEM ALTERAÇÕES VISÍVEIS OU PALPÁVEIS;<br>
			==> PAREDE VAGINAL<br>
			==> COLO DO ÚTERO<br>
			==> COLETA DE CITOPATOLÓGICO REALIZADA SEM INTERCORRÊNCIAS.<br>
			==> INSPEÇÃO DA GENITÁLIA EXTERNA NÃO MOSTRA ALTERAÇÕES E PALPAÇÃO NÃO MOSTRA NODULAÇÕES OU LINFONODOS.<br>
			==> EXAME ESPECULAR COM VISUALIZAÇÃO DE CORRIMENTO DE PEQUENA QUANTIDADE, SEM ODOR.<br>
			==> COLO DO ÚTERO NÃO FRIÁVEL, SEM HIPEREMIA, SEM LESÕES VEGETANTES, SEM FERIMENTOS E SEM ALTERAÇÕES VISÍVEIS.<br>
			# COLETA DE CITOPATOLÓGICO REALIZADA SEM INTERCORRÊNCIAS.<br><br>
			***<br><br>
			==> PAREDE VAGINAL APRESENTA SANGRAMENTO VERMELHO VIVO, HOMOGÊNEO,<br>
			==> COLO DO ÚTERO CILÍNDRICO, CENTRALIZADO, FRIÁVEL, APRESENTA LESÃO SOBRESSALENTE EM MOSAICOS GROSSEIROS COM BORDAS IRREGULARES.<hr>
		</p>
		<h1>Avaliação</h1>
		<br>
		<p>
			# NÃO APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE DOENÇA OU AFECÇÃO DURANTE A COLETA DE COP<br>
			==> Prolapso de órgãos pélvicos (POP):<br>
			==> DISPAREUNIA: DOR NA RELAÇÃO SEXUAL - X04<br>
			==> DISÚRIA: DOR, QUEIMAÇÃO OU DESCONFORTO AO URINAR - U01<br>
			==> POLACIÚRIA: URGÊNCIA AO URINAR - U02<br>
			==> VULVITE: IRRITAÇÃO DA VULVA - X84<br>
			==> VAGINITE: IRRITAÇÃO DA VAGINA X84<br>
			==> PÓLIPO CERVICAL / LACERAÇÃO ANTIGA - X85<br>
			==> CISTO DE NABOTH - X80<br>
			==> CISTO OU ABSCESSO DE BARTHOLIN - X99<br>
			==> ESFREGAÇO DE PAPANICOLAU/COLPOCITOLOGIA ONCÓTICA ANORMAL (SUGESTIVO DE NIC I, II OU III) - X86<br>
			==> CORRIMENTO VAGINAL BRANCO, ESPESSO/AQUOSO/ELÁSTICO, LEITOSA/TRANSPARENTE, SEM ODOR;<br>
			# NÃO APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE DOENÇA OU AFECÇÃO DE ACORDO COM EXAME GINECOLÓGICO.<br>
			==> CORRIMENTO VAGINAL AMARELO ESPUMOSO, ODOR ACRE, PRURIDO VULVAR;<br>
			==> APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE TRICOMONÍASE - X73<br>
			# SEXUALMENTE TRANSMISSÍVEL.<br>
			==> LEUCORREIA PURULENTA FLUINDO DO ORIFÍCIO CERVICAL EXTERNO.<br>
			==> QUEIXA DE CORRIMENTO AMARELO ACOMPANHADO DE ODOR, DISÚRIA E PRURIDO.<br>
			==> APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE CERVICITE/URETRITE POR CHLAMYDIA - X92<br>
			***** ORIENTO CPM USO ORAL DE AZITROMICINA 500MG - TOMAR 02 CP. DOSE ÚNICA,<br>
			***** ORIENTO CPM TTO PARA PARCEIRO DE USO OROL DE AZITROMICINA 500MG - TOMAR 02 CP. DOSE ÚNICA E CEFTRIAXONA 1G USO IM.<br>
			***** ENCAMINHO PARA SALA DE MEDICAÇÃO PARA SER ADMINISTRADO CPM IM<br>
			***** CEFTRIAXONA 1G - APLICAR AGORA.<br>
			***** METRONIDAZOL 400 MG - TOMAR 01 CP DE 12/12 HORAS DURANTE 7 DIAS.<br>
			==> CORRIMENTO BRANCO, GRUMOSO, ASPECTO CASEOSO, SEM ODOR.<br>
			==> APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE CANDIDÍASE - X72<br>
			***** ORIENTO CPM USO VAGINAL DE NISTATINA CREME VAGINAL - 01 APLICADOR INTRAVAGINAL À NOITE POR 14 NOITES; EVITAR RELAÇÃO SEXUAL DURANTE O USO DA MEDICAÇÃO;<br>
			==> CORRIMENTO BRANCO ACINZENTADO E HOMOGÊNEO/BOLHOSO, ODOR FÉTIDO.<br>
			***** APRESENTA SINAIS E SINTOMAS SUGESTIVOS DE VAGINOSE BACTERIANA - X84<hr>
		</p>
		<h1>Plano</h1>
		<br>
		<p>
			# ORIENTAÇÕES GERAIS E SINAIS DE ALARME;<br>
			# ORIENTAÇÃO SOBRE ETAPAS DO COP, SUA IMPORTÂNCIA E SOBRE O RESULTADO;<br>
			# ORIENTAÇÃO SOBRE A IMPORTÂNCIA DA REALIZAÇÃO DE EXAMES GINECOLÓGICOS DE ROTINA;<br>
			# ORIENTO AGENDAMENTO DE CONSULTA COM RESULTADO DE EXAMES;<br>
			# REALIZO COLETA DE CITOPATOLÓGICO SEM INTERCORRÊNCIAS;<br><br>
			***<br><br>
			# CID 10 - Z124<br><br>
			***<br><br>
			# JUSTIFICATIVA POPULAÇÃO ALVO<br>
			==> MEDICINA PREVENTIVA E MANUTENÇÃO DA SAÚDE;<br>
			==> COLETA DE MATERIAL CITOPATOLÓGICO PARA EXAME DE PREVENTIVO DA POPULAÇÃO ALVO ENTRE 25 À 64 ANOS.<br>
			***** PARA CONTRIBUIR NA AVALIAÇÃO DO ALCANCE DA POPULAÇÃO ALVO ÀS AÇÕES DE PREVENÇÃO DO CÂNCER DO COLO DO ÚTERO POR MEIO DE SEU RASTREAMENTO, DADO IMPORTANTE PARA A RELEVÂNCIA DOS INDICADORES DA SAÚDE DA MULHER.<br><br>
			***<br><br>
			# JUSTIFICATIVA FORA DA POPULAÇÃO ALVO<br>
			==> MEDICINA PREVENTIVA E MANUTENÇÃO DA SAÚDE;<br>
			==> COLETA DE MATERIAL CITOPATOLÓGICO PARA EXAME DE PREVENTIVO DA POPULAÇÃO.<br>
			***** PARA CONTRIBUIR NA AVALIAÇÃO DO ALCANCE DA POPULAÇÃO ÀS AÇÕES DE PREVENÇÃO DO CÂNCER DO COLO DO ÚTERO POR MEIO DE SEU RASTREAMENTO, DADO IMPORTANTE PARA A RELEVÂNCIA DOS INDICADORES DA SAÚDE DA MULHER.
		</p>
		<br>
	`;
	document.getElementById("page_text_content").style.display = "inline";
}
