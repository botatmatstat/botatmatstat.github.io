questions = [{
    "question": String.raw`Оценка МНК коэффициента регрессии без свободного члена  \( Y_i = \beta X_i + \varepsilon_i, i = 1, ..., n \,\), где  \( x_i = X_i - \overline{X}, y_i = Y_i - \overline{Y} \,\), находится по формуле
`,
    "answers": {
    
            "0": String.raw`
                 \( \hat{\beta} = \frac{\sum_{i=1}^n X_i Y_i }{\sum_{i=1}^n X_i^2} \,\)
            `,
            "1": String.raw`
                 \( \hat{\beta} = \frac{\sum_{i=1}^n x_i y_i }{\sum_{i=1}^n x_i^2} \,\)
            `,
            "2": String.raw`
                 \( \hat{\beta} = \frac{\sum_{i=1}^n x_i y_i }{\sum_{i=1}^n y_i^2} \,\)
            `,
            "3": String.raw`
                 \( \hat{\beta} = \frac{\sum_{i=1}^n X_i Y_i }{\sum_{i=1}^n Y_i^2} \,\)
            `,
            "4": String.raw`
                 \( \hat{\beta} = \frac{\sum_{i=1}^n x_i y_i }{\sum_{i=1}^n X_i^2} \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Оценка МНК неизвестного параметра  \( \theta \,\) для модели  \( Y_i = \theta X_{1i} + (1 + \theta) X_{2i} + \varepsilon_i, i = 1, ..., n \,\) равна
`,
    "answers": {
    
            "0": String.raw`
                 \( \frac{\sum_{i=1}^n (X_{1i} + X_{2i}) (Y_i - X_{2i}) }{\sum_{i=1}^n (X_{1i} + X_{2i})^2 } \,\)
            `,
            "1": String.raw`
                 \( \frac{\sum_{i=1}^n (X_{1i} + X_{2i}) (Y_i - X_{1i}) }{\sum_{i=1}^n (X_{1i} + X_{2i})^2 } \,\)
            `,
            "2": String.raw`
                 \( \frac{\sum_{i=1}^n (X_{1i} - Y_{i}) (Y_i - X_{2i}) }{\sum_{i=1}^n (X_{1i} + X_{2i})^2 } \,\)
            `,
            "3": String.raw`
                 \( \frac{\sum_{i=1}^n (X_{1i} + X_{2i}) (Y_i - X_{2i}) }{\sum_{i=1}^n (Y_{i} - X_{2i})^2 } \,\)
            `,
            "4": String.raw`
                 \( \frac{\sum_{i=1}^n (X_{1i} + X_{2i}) (Y_i - X_{2i}) }{\sum_{i=1}^n (X_{1i} - Y_{i})^2 } \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Для оцениваемой по 30 наблюдениям регрессии  \( Y_i = \alpha + \beta X_i + \varepsilon_i, i = 1, ..., n \,\) известны суммы  \( \sum_{i=1}^{30} X_i = -15, \sum_{i=1}^{30} X_i^2 = 60, \sum_{i=1}^{30} X_i Y_i = 15, \sum_{i=1}^{30} Y_i = 75 \,\). Система нормальных уравнений для оценок коэффициентов регрессии  \( \alpha, \beta \,\) методом наименьших квадратов равносильна системе
`,
    "answers": {
    
            "0": String.raw`
                 \( 2 \alpha -  \beta = 5;  \alpha - 4 \beta = -1 \,\)
            `,
            "1": String.raw`
                 \( 2 \alpha - \beta = -1; \alpha - 4 \beta = 5 \,\)
            `,
            "2": String.raw`
                 \( 30 \alpha + 15 \beta = 75; 15 \alpha + 60 \beta = 15 \,\)
            `,
            "3": String.raw`
                 \( 30 \alpha - 15 \beta = 15; -15 \alpha - 12 \beta = 1 \,\)
            `,
            "4": String.raw`
                 \( 4 \alpha - 6 \beta = 1; 6 \alpha + 60 \beta = 75 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Для модели парной регрессии  \( Y = \beta_1 I_n + \beta_2 X + \varepsilon \,\), где  \( Y = (Y_1, ..., Y_n), X = (X_1, ..., X_n), I_n = (1, ..., 1), \varepsilon = (\varepsilon_1, ..., \varepsilon_n), \hat{Y} = \hat{\beta}_1 I_n + \hat{\beta}_2 X, e = Y - \hat{Y} \,\) в пространстве  \( \mathbb{R}^n \,\) ортогональны вектора
`,
    "answers": {
    
            "0": String.raw`
                 \( e \,\) и  \( I_n \,\)
            `,
            "1": String.raw`
                 \( \varepsilon \,\) и  \( \hat{Y} \,\)
            `,
            "2": String.raw`
                 \( Y \,\) и  \( \hat{Y} \,\)
            `,
            "3": String.raw`
                 \( Y \,\) и  \( I_n \,\)
            `,
            "4": String.raw`
                 \( X \,\) и  \( \hat{Y} \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Эмманюэль и Владимир оценили зависимость стоимости подержанных Пежо (одной серии)  \( Y \,\) от пробега  \( X \,\) (измеряемого в км) с помощью модели парной регрессии  \( Y = \alpha + \beta X + \varepsilon \,\) по по одной и той же выборке, однако Эмманюэль измерял стоимость машин в евро, а Владимир – в рублях, 1 евро = 65 рублей. Оценки МНК коэффициента наклона регрессии, полученные Эмманюэлем  \( \beta_E \,\) и Владимиром  \( \beta_B \,\) связаны следующим образом:
`,
    "answers": {
    
            "0": String.raw`
                 \( \hat{\beta}_B = 65 \hat{\beta}_E \,\)
            `,
            "1": String.raw`
                 \( \hat{\beta}_B = \hat{\beta}_E \,\)
            `,
            "2": String.raw`
                 \( \hat{\beta}_E = 65 \hat{\beta}_B \,\)
            `,
            "3": String.raw`
                 \( \hat{\beta}_E = 4225 \hat{\beta}_B \,\)
            `,
            "4": String.raw`
                 \( \hat{\beta}_B = 4225 \hat{\beta}_E \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`При проверке гипотезы о значимости коэффициента линейной регрессии p-значение, соответствующее тестовой статистике, оказалось равным 0.07. Отсюда следует, что
`,
    "answers": {
    
            "0": String.raw`
                нет верного ответа
            `,
            "1": String.raw`
                соответствующий коэффициент не значим при уровне значимости 5%
            `,
            "2": String.raw`
                соответствующий коэффициент значим при уровне значимости 1%
            `,
            "3": String.raw`
                длина 95% доверительного интервала для этого коэффициента равна 0.07
            `,
            "4": String.raw`
                длина 95% доверительного интервала для этого коэффициента больше 0.07
            `,
            "5": String.raw`
                длина 95% доверительного интервала для этого коэффициента меньше 0.07
            `,},
        "true": "1",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Для модели  \( Y_i = \beta_1 + \beta_2 X_i + \varepsilon_i, i = 1, ..., n, \varepsilon_i \sim N(0, \sigma^2_{\varepsilon}) \,\) тестовая статистика  \( \frac{ \hat{\beta}_2 - \beta^0_2 }{ se(\hat{\beta}_2)}  \,\) имеет распределение
`,
    "answers": {
    
            "0": String.raw`
                 \( \ t_{n-2} \,\)
            `,
            "1": String.raw`
                 \( N(0,1) \,\)
            `,
            "2": String.raw`
                 \( N(0, \sigma_{\varepsilon}) \,\)
            `,
            "3": String.raw`
                 \( \chi^2_1 \,\)
            `,
            "4": String.raw`
                 \( \chi^2_{n-2} \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`С помощью t-теста проверяется гипотеза о том, что 
 `,
    "answers": {
    
            "0": String.raw`
                коэффициент регрессии равен единице
            `,
            "1": String.raw`
                оценка коэффициента регрессии равна единице
            `,
            "2": String.raw`
                стандартная ошибка коэффициента регрессии равна единице
            `,
            "3": String.raw`
                оценка стандартной ошибки коэффициента регрессии равна единице
            `,
            "4": String.raw`
                надо ходить на семинары по эконометрике
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    
{
    "question": String.raw`Для регрессии  \( Y_i = \beta_1 + \beta_2 X_i + \varepsilon_i \,\), оценённой по 30 наблюдениям с суммой квадратов остатков, равной 15, несмещенная оценка дисперсии случайной составляющей равна
 `,
    "answers": {
    
            "0": String.raw`
                 \( 15/28 \,\)
            `,
            "1": String.raw`
                 \( 0.5 \,\)
            `,
            "2": String.raw`
                 \( 13/30 \,\)
            `,
            "3": String.raw`
                 \( 13/28 \,\)
            `,
            "4": String.raw`
                 \( 2 \,\)
            `,
            "5": String.raw`
                 \( 15/32 \,\)
            `,},
        "true": "0",
        "explanation": "",
    
    }
    ,
    ]
init_question();var result_array=new Array(questions.length);