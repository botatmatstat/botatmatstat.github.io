questions = [{
    "question": String.raw`По 52 наблюдениям студент построил две регрессии, \(\,\hat Y_i = 3.1 + 0.8X_i\,\) и \(\,\hat X_i = -0.3 + 0.2Y_i\,\). Коэффициент \(\,R^2_{adj}\,\) для первой регрессии примерно равен`,
    "answers": {
    
            "A": String.raw`
                \(\,0.14\,\)
            `,
            "B": String.raw`
                \(\,0.16\,\)
            `,
            "C": String.raw`
                \(\,0.40\,\)
            `,
            "D": String.raw`
                \(\,0.32\,\)
            `,
            "E": String.raw`
                \(\,0.37\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Гипотеза Алмон при оценивании модели с распределенными лагами \(\,Y_t = \alpha + \sum_{j=0}^J\beta_j X_{t-j} + \varepsilon_t\,\) состоит в том, что \(\,\beta_j\,\) представимо в виде`,
    "answers": {
    
            "A": String.raw`
                \(\,\alpha_0 + \alpha_1 j + \alpha_2 j^2 + ... + \alpha_r j^r\,\)
            `,
            "B": String.raw`
                \(\,\alpha_0 + \alpha_1 j\,\)
            `,
            "C": String.raw`
                \(\,\alpha_0 \lambda^j\,\)
            `,
            "D": String.raw`
                \(\,\alpha_0 \ln j\,\)
            `,
            "E": String.raw`
                \(\,\alpha_0 + \alpha_1 \lambda + \alpha_2 \lambda^2 +... + \alpha_j \lambda^j\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В предположениях нормальности ошибок ширина 95%-го интервала для ожидаемого (среднего) значения \(\,Y_{n+1}\,\) равна \(\,1200\,\). Известно, что \(\,\hat\sigma = 400\,\) и \(\,n=60\,\). Ширина 95%-го интервала для фактического (индивидального) значения \(\,Y_{n+1}\,\) примерно равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1500\,\)
            `,
            "B": String.raw`
                \(\,1600\,\)
            `,
            "C": String.raw`
                \(\,2000\,\)
            `,
            "D": String.raw`
                \(\,1000\,\)
            `,
            "E": String.raw`
                \(\,1400\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Основная гипотеза модели адаптивных ожиданий состоит в том, что`,
    "answers": {
    
            "A": String.raw`
                \(\,X_t^e - X_{t-1}^e = (1-\lambda) (X_t - X_{t-1}), \; 0 \leq \lambda < 1\,\)
            `,
            "B": String.raw`
                \(\,Y_t^e = \left(1 - \frac{1}{\delta}\right) Y_{t-1} + \frac{1}{\delta} Y_{t}, \; 0 < \delta \leq 1\,\)
            `,
            "C": String.raw`
                \(\,Y_t - Y_{t-1}^e = \delta (Y_t^e - Y_{t-1}), \; 0 < \delta \leq 1\,\)
            `,
            "D": String.raw`
                \(\,X_{t+1}^e - X_{t}^e = \lambda (X_{t} - X_{t}^e), \; 0 \leq \lambda < 1\,\)
            `,
            "E": String.raw`
                \(\,Y_t - Y_{t-1} = \delta (Y_t^e - Y_{t-1}), \; 0 < \delta \leq 1\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Если нулевая гипотеза в расширенном тесте Дики-Фуллера с константой отвергается, то исходный ряд можно считать`,
    "answers": {
    
            "A": String.raw`
                возрастающим
            `,
            "B": String.raw`
                стационарным во вторых разностях
            `,
            "C": String.raw`
                стационарным
            `,
            "D": String.raw`
                нестационарным
            `,
            "E": String.raw`
                стационарным в первых разностях
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Инструмент \(\,Z_t\,\) для состоятельной оценки динамической модели \(\,Y_{t} =\alpha +\beta_0 X_t + \beta_1 Y_{t-1} + \varepsilon_t\,\), где \(\,\varepsilon_t = u_t + \lambda_1 \varepsilon_{t-1} + \lambda_2 \varepsilon_{t-2}\,\),`,
    "answers": {
    
            "A": String.raw`
                не требуется
            `,
            "B": String.raw`
                удовлетворяет условию \(\,\operatorname{Corr}(Z_t, u_t) \to 1\,\)
            `,
            "C": String.raw`
                удовлетворяет условию \(\,\operatorname{Corr}(Z_t, Y_{t-1}) \neq 0\,\)
            `,
            "D": String.raw`
                удовлетворяет условию \(\,\operatorname{Corr}(Z_t, Y_{t-1}) =0\,\)
            `,
            "E": String.raw`
                удовлетворяет условию \(\,\operatorname{Corr}(Z_t, X_t) =0\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`На панельных данных коэффициенты при факторах, постоянных во времени, НЕ могут быть оценены с помощью`,
    "answers": {
    
            "A": String.raw`
                метода максимального правдоподобия
            `,
            "B": String.raw`
                МНК для модели с полным набором дамми-переменных для каждого индивида
            `,
            "C": String.raw`
                between-регрессии
            `,
            "D": String.raw`
                RE-оценки
            `,
            "E": String.raw`
                сквозной регрессии
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Выберите стационарный процесс (уравнение, которое имеет стационарное решение, не заглядывающее в будущее), если \(\,u_t\,\) --- белый шум.`,
    "answers": {
    
            "A": String.raw`
                \(\,y_t = 2 + 3t + u_t + u_{t-1}\,\)
            `,
            "B": String.raw`
                \(\,y_t = tu_{t}\,\)
            `,
            "C": String.raw`
                \(\,y_t = 1.2 y_{t-1} + u_t\,\)
            `,
            "D": String.raw`
                \(\,y_t = u_1 + u_2 + ... + u_t\,\)
            `,
            "E": String.raw`
                \(\,y_t = 1.2 + 0.8 y_{t-1} - 0.12 y_{t-2} + u_t - 3u_{t-1}\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`У Маши две монетки: медная и серебряная. Маша подкинула каждую монетку 100 раз. Затем с помощью метода максимального правдоподобия Маша трижды оценила вероятность выпадения орла: для медной монетки, для серебряной и по объединённой выборке. Значения функции правдоподобия равны \(\,\ell_{copper} = -300\,\), \(\,\ell_{silver}=-200\,\) и \(\,\ell_{common} = -510\,\).  \(\,LR\,\) статистика, проверяющая гипотезу о равенстве вероятностей выпадения орла для двух монеток, равна`,
    "answers": {
    
            "A": String.raw`
                \(\,20\,\)
            `,
            "B": String.raw`
                \(\,5\,\)
            `,
            "C": String.raw`
                \(\,500\,\)
            `,
            "D": String.raw`
                \(\,1010\,\)
            `,
            "E": String.raw`
                \(\,10\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Два временных ряда могут быть коинтегрированными, только если`,
    "answers": {
    
            "A": String.raw`
                оба ряда нестационарны и имеют одинаковый порядок интегрирования
            `,
            "B": String.raw`
                один ряд стационарен, а второй --- нет
            `,
            "C": String.raw`
                оба ряда нестационарны и имеют разные порядки интегрирования
            `,
            "D": String.raw`
                оба ряда стационарны
            `,
            "E": String.raw`
                оба ряда стационарны вокруг тренда
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    ]


    init_question();   
    var result_array = new Array(questions.length);