questions = [{
    
    "question": String.raw`Если  \( \operatorname{E}(X) = 4 \,\),  \( \operatorname{E}(Y) = 3 \,\),  \( \operatorname{D}(X) = 6 \,\),  \( \operatorname{D}(Y) = 7 \,\),
     \( \operatorname{Cov}(X,Y) = -1 \,\), то  \( \operatorname{Cov}(1 - X + 2Y, X) \,\)  равна
 `,
    "answers": {
    
            "0": String.raw`
                -8
            `,
            "1": String.raw`
                8
            `,
            "2": String.raw`
                4
            `,
            "3": String.raw`
                -4
            `,
            "4": String.raw`
                -9
            `,
            "5": String.raw`
                9
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    {
        "question": String.raw`Совместное распределение случайных величин  \( X \,\) и  \( Y \,\) задано с помощью таблицы
    
     \(\begin{pmatrix}
     &  \, X=3       &   \,X=4      &  \,X=5     \\ 
      \,Y= 3   & 0.1   &  0.3  & 0.1   \\ 
      \,Y= 4  & 0.15  &  0.05 & 0.05  \\ 
      \,Y =6   & 0.05  &  0.15 & 0.05  \\ 
     \,
     \end{pmatrix}\)
    
    Математическое ожидание случайной величины  \( Y \,\) при условии, что  \( X=3 \,\), равно
    
    `,
        "answers": {
        
                "0": String.raw`
                    4
                `,
                "1": String.raw`
                    2
                `,
                "2": String.raw`
                    3.4
                `,
                "3": String.raw`
                    2.4
                `,
                "4": String.raw`
                    6
                `,},
            "true": "0",
            "explanation": "",
        
        }
        ,
    
    {
    "question": String.raw`Джеймс Бонд оценил парную регрессию и оказалось,
    что  \( \hat Y_i = 5 + 6 X_i \,\).
    Если Джеймс Бонд оценит регрессию без константы, то окажется, что
 `,
    "answers": {
    
            "0": String.raw`
                
            `,
            "1": String.raw`
                 \( \hat Y_i = 6 X_i \,\)
            `,
            "2": String.raw`
                 \( \hat Y_i = 11 X_i \,\)
            `,
            "3": String.raw`
                 \( \hat Y_i = 5 \,\)
            `,
            "4": String.raw`
                 \( \hat Y_i = 11 \,\)
            `,
            "5": String.raw`
                 \( \hat Y_i = 5.5 X_i \,\)
            `,
            "6": String.raw`
                 \( \hat Y_i = 5.5 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Предпосылки теоремы Гаусса-Маркова выполнены, случайные ошибки нормально распределены,
    уровень доверия равен  \( 80 \,\)%, критическое значение  \( t \,\)-статистики равно
     \( 1.64 \,\), всего  \( n \,\) наблюдений.
    Регрессия имеет вид  \( \hat Y_i = \underset{(3)}{-4} + \underset{(0.2)}{5}X_i \,\),
    в скобках указаны стандартные ошибки. Доверительный интервал для  \( \beta_2 \,\) равен
 `,
    "answers": {
    
            "0": String.raw`
                 \( [4.67; 5.33] \,\)
            `,
            "1": String.raw`
                 \( [3.36; 6.64] \,\)
            `,
            "2": String.raw`
                 \( [1.72; 8.28] \,\)
            `,
            "3": String.raw`
                 \( [4.85; 5.15] \,\)
            `,
            "4": String.raw`
                 \( [4.27; 5.73] \,\)
            `,
            "5": String.raw`
                не существует
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Имеются данные по доходу жены, мужа и продолжительности брака. Доход семьи складывается из дохода жены и мужа. Вася оценил зависимость дохода семьи от продолжительности брака и получил регрессию  \( \hat Y_i  = 20 + 3X_i \,\), Петя оценил зависимость дохода мужа от продолжительности брака и получил регрессию  \( \hat Y_i  = 10 + 2X_i \,\). Маша оценивает зависимость дохода жены от продолжительности брака. Она получит регрессию:
 `,
    "answers": {
    
            "0": String.raw`
                 \( \hat Y_i  = 10+X_i \,\)
            `,
            "1": String.raw`
                 \( \hat Y_i  = 10-X_i \,\)
            `,
            "2": String.raw`
                 \( \hat Y_i  = 30+5X_i \,\)
            `,
            "3": String.raw`
                 \( \hat Y_i  = 20+3X_i \,\)
            `,
            "4": String.raw`
                 \( \hat Y_i  = 15+2.5X_i \,\)
            `,
            "5": String.raw`
                недостаточно данных для ответа
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В парной регрессии на уровне значимости 5%-ов гипотеза  \( H_0 \,\):  \( \beta_2 = 2016 \,\) не отвергается.
    Из этого можно сделать вывод, что на соответствующем уровне значимости
 `,
    "answers": {
    
            "0": String.raw`
                 \( H_0 \,\):  \( \beta_2 = 0 \,\) отвергается
            `,
            "1": String.raw`
                 \( H_0 \,\):  \( \beta_2 = 0 \,\) не отвергается
            `,
            "2": String.raw`
                 \( H_a \,\):  \( \beta_2 \neq 0 \,\) не отвергается
            `,
            "3": String.raw`
                 \( H_a \,\):  \( \beta_2 \neq 0 \,\) отвергается
            `,
            "4": String.raw`
                доверительный интервал для  \( \beta_2 \,\) не содержит ноль
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В парной регрессии величина  \( \bar Y - \hat\beta_1 - \hat\beta_2 \bar X \,\)
 `,
    "answers": {
    
            "0": String.raw`
                равна 0
            `,
            "1": String.raw`
                равна 1
            `,
            "2": String.raw`
                равна (-1)
            `,
            "3": String.raw`
                не существует
            `,
            "4": String.raw`
                может принимать любое неотрицательное значение
            `,
            "5": String.raw`
                может принимать любое положительное значение
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Условием теоремы Гаусса-Маркова, необходимым для несмещённости оценок
    коэффициентов регрессии в модели  \( Y_i = \beta_1 + \beta_2 X_i + u_i \,\) является
 `,
    "answers": {
    
            "0": String.raw`
                 \( \operatorname{E}(u_i)=0 \,\)
            `,
            "1": String.raw`
                гомоскедастичность случайных ошибок
            `,
            "2": String.raw`
                гетероскедастичность случайных ошибок
            `,
            "3": String.raw`
                нормальность случайных ошибок
            `,
            "4": String.raw`
                некоррелированность случайных ошибок
            `,
            "5": String.raw`
                 \( \operatorname{E}(u_i)\neq 0 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В модели парной регрессии  \( R^2 = 0.9 \,\),  \( TSS = 100 \,\) и  \( 12 \,\) наблюдений.
    Несмещённая оценка дисперсии случайной ошибки равна
 `,
    "answers": {
    
            "0": String.raw`
                 \( 1 \,\)
            `,
            "1": String.raw`
                 \( 1.1 \,\)
            `,
            "2": String.raw`
                 \( 1.2 \,\)
            `,
            "3": String.raw`
                 \( 0.8 \,\)
            `,
            "4": String.raw`
                 \( 0.9 \,\)
            `,
            "5": String.raw`
                 \( 1.3 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если все  \( Y_i \,\) в линейной регрессии увеличить в два раза, то оценка  \( \hat\beta_2 \,\)
 `,
    "answers": {
    
            "0": String.raw`
                помножится на  \( 2 \,\)
            `,
            "1": String.raw`
                помножится на  \( 4 \,\)
            `,
            "2": String.raw`
                поделится на  \( 2 \,\)
            `,
            "3": String.raw`
                поделится на  \( 4 \,\)
            `,
            "4": String.raw`
                не изменится
            `,
            "5": String.raw`
                изменится в произвольную сторону, в зависимости от  \( X_i \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если  \( \alpha = 0.05 \,\) и  \( P \,\)-значение равно  \( 0.04 \,\), то
 `,
    "answers": {
    
            "0": String.raw`
                 \( H_0 \,\) отвергается
            `,
            "1": String.raw`
                 \( H_0 \,\) принимается
            `,
            "2": String.raw`
                 \( H_a \,\) отвергается
            `,
            "3": String.raw`
                 \( H_a \,\) не отвергается
            `,
            "4": String.raw`
                 \( H_a \,\) принимается
            `,
            "5": String.raw`
                недостаточно информации для ответа
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Свободно распространяемым программным обеспечением является
 `,
    "answers": {
    
            "0": String.raw`
                R
            `,
            "1": String.raw`
                Excel
            `,
            "2": String.raw`
                Stata
            `,
            "3": String.raw`
                Eviews
            `,
            "4": String.raw`
                SPSS
            `,
            "5": String.raw`
                Matlab
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если  \( \operatorname{E}(X) = -3 \,\),  \( \operatorname{E}(Y) = 2 \,\),  \( \operatorname{D}(X) = 6 \,\),  \( \operatorname{D}(Y) = 7 \,\),
     \( \operatorname{Cov}(X,Y) = -1 \,\), то  \( \operatorname{D}(5X + 2Y-1) \,\)  равна
 `,
    "answers": {
    
            "0": String.raw`
                158
            `,
            "1": String.raw`
                178
            `,
            "2": String.raw`
                198
            `,
            "3": String.raw`
                148
            `,
            "4": String.raw`
                168
            `,
            "5": String.raw`
                169
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если в модели парной регрессии  \( Y_i=\beta_1 + \beta_2 X_i + u_i \,\) все  \( X_i \,\)
  равны константе  \( 2016 \,\), то оценка  \( \hat \beta_2 \,\) равна
 `,
    "answers": {
    
            "0": String.raw`
                 \( 2016 \,\)
            `,
            "1": String.raw`
                 \( 1/2016 \,\)
            `,
            "2": String.raw`
                 \( -2016 \,\)
            `,
            "3": String.raw`
                 \( -1/2016 \,\)
            `,
            "4": String.raw`
                 \( 0 \,\)
            `,
            "5": String.raw`
                не существует
            `,},
        "true": "5",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если в модели парной регрессии  \( Y_i=\beta_1 + \beta_2 X_i + u_i \,\)
  все  \( Y_i \,\) равны константе  \( 2016 \,\), то оценка  \( \hat \beta_2 \,\) равна
 `,
    "answers": {
    
            "0": String.raw`
                 \( 2016 \,\)
            `,
            "1": String.raw`
                 \( 1/2016 \,\)
            `,
            "2": String.raw`
                 \( -2016 \,\)
            `,
            "3": String.raw`
                 \( -1/2016 \,\)
            `,
            "4": String.raw`
                 \( 0 \,\)
            `,
            "5": String.raw`
                не существует
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Квартальные данные о ВВП России за 10 лет являются
 `,
    "answers": {
    
            "0": String.raw`
                панельными данными
            `,
            "1": String.raw`
                перекрестной выборкой
            `,
            "2": String.raw`
                случайной выборкой
            `,
            "3": String.raw`
                сходящимся рядом
            `,
            "4": String.raw`
                временным рядом
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Предпосылки теоремы Гаусса-Маркова выполнены, случайные ошибки нормально распределены.
Регрессия по 25 наблюдениям имеет вид  \( \hat Y_i = \underset{(2)}{-1}  + \underset{(0.1)}{4}X_i \,\).
В скобках указаны стандартные ошибки. На уровне значимости  \( 0.05 \,\)
 `,
    "answers": {
    
            "0": String.raw`
                оба коэффициента значимы
            `,
            "1": String.raw`
                значим только коэффициент наклона
            `,
            "2": String.raw`
                оба коэффициента незначимы
            `,
            "3": String.raw`
                недостаточно информации для определения значимости
            `,
            "4": String.raw`
                значим только свободный член
            `,},
        "true": "1",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если  \( P \,\)-значение  \( t \,\)-статистики при проверке значимости коэффициента регрессии равно  \( 0.04 \,\), то этот коэффициент не значим при уровне значимости
 `,
    "answers": {
    
            "0": String.raw`
                 \( 0.05 \,\)
            `,
            "1": String.raw`
                 \( 0.95 \,\)
            `,
            "2": String.raw`
                 \( 0.9 \,\)
            `,
            "3": String.raw`
                 \( 0.1 \,\)
            `,
            "4": String.raw`
                 \( 0.01 \,\)
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Регрессия по 25 наблюдениям имеет вид  \( \hat Y_i = \underset{(2)}{-1}  - \underset{(0.5)}{1.5}X_i \,\).
  В скобках указаны стандартные ошибки.
  При проверке гипотезы о равенстве коэффициента наклона  \( (-1) \,\) расчётное значение
   \( t \,\)-статистики равно
 `,
    "answers": {
    
            "0": String.raw`
                 \( -2 \,\)
            `,
            "1": String.raw`
                 \( 0.5 \,\)
            `,
            "2": String.raw`
                 \( 2 \,\)
            `,
            "3": String.raw`
                 \( -0.5 \,\)
            `,
            "4": String.raw`
                 \( -1 \,\)
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В регрессии с константой, оценённой с помощью МНК, сумма остатков
 `,
    "answers": {
    
            "0": String.raw`
                может принимать любое неположитлеьное значение
            `,
            "1": String.raw`
                может принимать любое положительное значение
            `,
            "2": String.raw`
                может принимать любое значение из  \( \mathbb{R} \) 
            `,
            "3": String.raw`
                равна  \(1 \) 
            `,
            "4": String.raw`
                равна  \(0 \) 
            `,
            "5": String.raw`
                не существует
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если в регрессии с константой, оценённой с помощью МНК, сумма квадратов остатков равна нулю, то показатель  \( R^2 \,\)
 `,
    "answers": {
    
            "0": String.raw`
                равен  \( 0 \,\)
            `,
            "1": String.raw`
                равен  \( -1 \,\)
            `,
            "2": String.raw`
                не существует
            `,
            "3": String.raw`
                может принимать любое значение на  \( [0;1] \,\)
            `,
            "4": String.raw`
                равен  \( 1 \,\)
            `,
            "5": String.raw`
                не существует
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Необходимым условием теоремы Гаусса-Маркова является
 `,
    "answers": {
    
            "0": String.raw`
                наличие в матрице  \( X \,\) единичного столбца
            `,
            "1": String.raw`
                нормальность остатков
            `,
            "2": String.raw`
                нормальность  \( Y_i \,\)
            `,
            "3": String.raw`
                постоянство дисперсии остатков
            `,
            "4": String.raw`
                постоянство дисперсии случайной ошибки
            `,},
        "true": "4",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При условной гетероскедастичности и наблюдениях, представляющих случайную выборку, оценки МНК
 `,
    "answers": {
    
            "0": String.raw`
                остаются состоятельными
            `,
            "1": String.raw`
                перестают быть состоятельными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При условной гетероскедастичности и наблюдениях, представляющих случайную выборку, оценки МНК
 `,
    "answers": {
    
            "0": String.raw`
                остаются несмещёнными
            `,
            "1": String.raw`
                перестают быть несмещёнными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если нарушена только предпосылка  \( \operatorname{E}(u_i) = 0 \,\), то при оценке модели  \( y_i = \beta_1 + \beta_2 x_i + u_i \,\) оценка  \( \hat \beta_2 \,\) окажется
 `,
    "answers": {
    
            "0": String.raw`
                несмещённой
            `,
            "1": String.raw`
                смещённой
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если все выборочные корреляции между регрессорами по модулю меньше 0.1 то строгая мультиколлинеарность
 `,
    "answers": {
    
            "0": String.raw`
                возможна
            `,
            "1": String.raw`
                невозможна
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Предпосылка об отсутствии систематической ошибки в модели означает,
  что для всех наблюдений
 `,
    "answers": {
    
            "0": String.raw`
                 \( \operatorname{D}(\varepsilon_i)=0 \,\)
            `,
            "1": String.raw`
                 \( \operatorname{D}(\varepsilon_i) \neq 0 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Стандартные ошибки в форме Уайта в случае гетероскедастичности помогают
  устранить несостоятельность оценок коэффициентов
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Незначимость всех коэффициентов регрессии
 `,
    "answers": {
    
            "0": String.raw`
                может быть не связана с мультиколлинеарностью
            `,
            "1": String.raw`
                обязательно свидетельствует о наличии мультиколлинеарности
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`После применения МНК к модели  \( y_i=\beta x_i + \varepsilon_i \,\)   сумма  \( ESS+RSS \,\)
 `,
    "answers": {
    
            "0": String.raw`
                может быть не равна  \( TSS \,\)
            `,
            "1": String.raw`
                обязательно равна  \( TSS \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При наличии ошибок измерения зависимой переменной МНК-оценки коэффициентов модели
 `,
    "answers": {
    
            "0": String.raw`
                состоятельны
            `,
            "1": String.raw`
                несостоятельны
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если выполнены все предпосылки теоремы Гаусса-Маркова, но остатки модели не подчиняются нормальному закону распределения, то МНК-оценки коэффициентов регрессии являются
 `,
    "answers": {
    
            "0": String.raw`
                несмещёнными
            `,
            "1": String.raw`
                смещёнными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Индексы вздутия дисперсии (VIF) в случае отсутствия мультиколлинеарности
  лежат в интервале
 `,
    "answers": {
    
            "0": String.raw`
                 \( [1;+\infty) \,\)
            `,
            "1": String.raw`
                 \( [0;1] \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Нулевая гипотеза в тесте Дарбина-Уотсона состоит в
 `,
    "answers": {
    
            "0": String.raw`
                отсутствии автокорреляции
            `,
            "1": String.raw`
                наличии автокорреляции
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если в модель добавили незначимый фактор, то коэффициент детерминации  \( R^2 \,\)
 `,
    "answers": {
    
            "0": String.raw`
                вырастет
            `,
            "1": String.raw`
                упадёт
            `,
            "2": String.raw`
                не изменится
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При диагностике автокорреляции третьего порядка тест Бройша-Годфри
 `,
    "answers": {
    
            "0": String.raw`
                применим
            `,
            "1": String.raw`
                неприменим
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Нормальность остатков является одной из предпосылок теоремы Гаусса-Маркова
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В случае гетероскедастичности применение стандартных ошибок в форме Уайта
  позволяет сделать оценки коэффициентов регрессии
 `,
    "answers": {
    
            "0": String.raw`
                несмещёнными
            `,
            "1": String.raw`
                состоятельными
            `,
            "2": String.raw`
                эффективными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`С помощью МНК оценивается модель  \( y_i = \beta_1 + \beta_2 x_i + \varepsilon_i \,\).
  Наблюдения представляют собой случайную выборку, и  \( \operatorname{Cov}(\varepsilon_i, x_i) = 1 \,\).
  В этом случае  \( \plim \hat \beta_2^{ols} \,\)
 `,
    "answers": {
    
            "0": String.raw`
                не равен  \( \beta_2 \,\)
            `,
            "1": String.raw`
                равен  \( \beta_2 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`После применения МНК к модели  \( y_i=\beta x_i+\varepsilon_i \,\)
  сумма остатков  \( \sum \hat \varepsilon_i \,\)
 `,
    "answers": {
    
            "0": String.raw`
                не равна нулю
            `,
            "1": String.raw`
                равна нулю
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В результате применения МНК к модели  \( y_i=\beta_1 + \beta_2 x_i+\varepsilon_i \,\)
  сумма  \( \sum x_i \hat \varepsilon_i \,\)
 `,
    "answers": {
    
            "0": String.raw`
                обязательно равна нулю
            `,
            "1": String.raw`
                может быть не равна нулю
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В случае мультиколлинеарности применение гребневой регрессии (ridge-regression)
  делает оценки коэффициентов
 `,
    "answers": {
    
            "0": String.raw`
                смещёнными
            `,
            "1": String.raw`
                несмещёнными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В случае мультиколлинеарности оценки дисперсий коэффициентов модели становятся
 `,
    "answers": {
    
            "0": String.raw`
                несмещёнными
            `,
            "1": String.raw`
                смещёнными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`После применения МНК к исходной модели дополнительно можно оценить модель
   \( \ln(\hat \varepsilon_i^2 )=\gamma_1 + \gamma_2 \ln(x_i) + u_i \,\)  для диагностики
 `,
    "answers": {
    
            "0": String.raw`
                гетероскедастичности
            `,
            "1": String.raw`
                автокорреляции
            `,
            "2": String.raw`
                мультиколлинеарности
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Для сравнения качества моделей  \( y_i=\beta_1+ \beta_2 x_i+\varepsilon_i \,\) и
   \( \ln(y_i)=\gamma_1+ \gamma_2 x_i + \varepsilon_i \,\), оцененных на одном наборе данных,
  используют
 `,
    "answers": {
    
            "0": String.raw`
                коэффициент детерминации  \( R^2 \,\)
            `,
            "1": String.raw`
                скорректированный коэффициент  \( R_{adj
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При диагностике автокорреляции первого порядка тест Бройша-Годфри
 `,
    "answers": {
    
            "0": String.raw`
                применим
            `,
            "1": String.raw`
                неприменим
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Ошибки измерения независимой переменной являются одной из причин
 `,
    "answers": {
    
            "0": String.raw`
                эндогенности
            `,
            "1": String.raw`
                мультиколлинеарности
            `,
            "2": String.raw`
                автокорреляции
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Во временных рядах гетероскедастичность
 `,
    "answers": {
    
            "0": String.raw`
                возможна
            `,
            "1": String.raw`
                невозможна
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Оценка  \( \hb \,\) называется несмещённой, если с ростом числа наблюдений она стремится
  к истинной  \( \beta \,\)
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`С ростом числа наблюдений распределение статистики Дарбина-Уотсона стремится к
 `,
    "answers": {
    
            "0": String.raw`
                особому распределению Дарбина-Уотсона
            `,
            "1": String.raw`
                стандартному нормальному распределению
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Нестрогая мультиколлинеарность нарушает теорему Гаусса-Маркова
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если ошибки распределены не нормально, то МНК-оценки коэффициентов регрессии
 `,
    "answers": {
    
            "0": String.raw`
                эффективны и несмещены
            `,
            "1": String.raw`
                неэффективны и смещены
            `,
            "2": String.raw`
                эффективны и смещены
            `,
            "3": String.raw`
                неэффективны и несмещены
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Если в модели присутствуют лаги независимой переменной, то тест Дарбина-Уотсона
 `,
    "answers": {
    
            "0": String.raw`
                применим
            `,
            "1": String.raw`
                неприменим
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При гетероскедастичности оценки коэффициентов
 `,
    "answers": {
    
            "0": String.raw`
                остаются несмещёнными
            `,
            "1": String.raw`
                в среднем завышены
            `,
            "2": String.raw`
                в среднем занижены
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`У разностного  уравнения  \( y_t=0.1y_{t-1} + \e_t +0.4\e_{t-1} \,\)
 `,
    "answers": {
    
            "0": String.raw`
                есть единственное стационарное решение
            `,
            "1": String.raw`
                нет стационарных решений
            `,
            "2": String.raw`
                есть бесконечное количество стационарных решений
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В теореме Гаусса-Маркова предполагается, что ошибки
 `,
    "answers": {
    
            "0": String.raw`
                имеют нулевое математическое ожидание и единичную дисперсию
            `,
            "1": String.raw`
                имеют ненулевое математическое ожидание и неединичную дисперсию
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При условной гетероскедастичности оценки коэффициентов
 `,
    "answers": {
    
            "0": String.raw`
                состоятельны
            `,
            "1": String.raw`
                несостоятельны
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Двухшаговый метод наименьших квадратов --- это стандартный способ борьбы с
 `,
    "answers": {
    
            "0": String.raw`
                эндогенностью
            `,
            "1": String.raw`
                автокорреляцией
            `,
            "2": String.raw`
                гетероскедастичностью
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`После применения МНК к модели  \( y_i=\beta x_i + \varepsilon_i \,\) сумма  \( \sum \he_i^2 \,\)
 `,
    "answers": {
    
            "0": String.raw`
                равна нулю
            `,
            "1": String.raw`
                не обязательно равна нулю
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При автокорреляции МНК-оценки коэффициентов являются
 `,
    "answers": {
    
            "0": String.raw`
                несмещёнными
            `,
            "1": String.raw`
                смещёнными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Нестрогая мультиколлинеарность --- это одно из нарушений предпосылок теоремы
  Гаусса-Маркова
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`В случае мультиколлинеарности оценки дисперсий коэффициентов являются
 `,
    "answers": {
    
            "0": String.raw`
                несмещёнными
            `,
            "1": String.raw`
                в среднем завышенными
            `,
            "2": String.raw`
                в среднем заниженными
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Тест Дарбина-Уотсона в регрессии без свободного члена
 `,
    "answers": {
    
            "0": String.raw`
                неприменим
            `,
            "1": String.raw`
                применим
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Нулевой гипотезой в тесте Уайта является гипотеза о
 `,
    "answers": {
    
            "0": String.raw`
                гомоскедастичности
            `,
            "1": String.raw`
                гетероскедастичности
            `,
            "2": String.raw`
                наличии автокорреляции
            `,
            "3": String.raw`
                отсутствии автокорреляции
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Величина  \( R^2_{adj} \,\) показывает, какую долю дисперсии зависимой переменной
   объясняют использованные регрессоры
 `,
    "answers": {
    
            "0": String.raw`
                неверно
            `,
            "1": String.raw`
                верно
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    ]
init_question();var result_array=new Array(questions.length);