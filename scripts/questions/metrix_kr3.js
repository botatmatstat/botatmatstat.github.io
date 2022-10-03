questions = [{
    "question": String.raw`Уоррен Баффет проверяет гипотезу \(\,H_0\,\): \(\,g(\beta)=0\,\) для модели \(\,Y_i = \beta_0 + \beta_1 X_{i1} + ... + \beta_k X_{ik} + \varepsilon_i\,\) с помощью теста множителей Лагранжа. Для теста Уоррену необходимо знать оценки параметров`,
    "answers": {
    
            "A": String.raw`
                регрессии на константу
            `,
            "B": String.raw`
                модели с ограничениями, и модели без ограничений
            `,
            "C": String.raw`
                только модели без ограничений
            `,
            "D": String.raw`
                только модели с ограничениями
            `,
            "E": String.raw`
                регрессии на все факторы кроме константы
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Использование скорректированных стандартных ошибок Уайта при гомоскедастичности приведет к`,
    "answers": {
    
            "A": String.raw`
                понижению эффективности МНК оценок коэффициентов
            `,
            "B": String.raw`
                смещённости МНК оценок коэффициентов
            `,
            "C": String.raw`
                повышению эффективности МНК оценок коэффициентов
            `,
            "D": String.raw`
                несостоятельности МНК оценок коэффициентов
            `,
            "E": String.raw`
                получению состоятельной оценки дисперсии случайной ошибки
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим логистическую регрессию с пятью регрессорами помимо константы, оцениваемую методом максимального правдоподобия по \(\,n\,\) наблюдениям. Cтатистика \(\,\hat \beta_3 / se(\hat\beta_3)\,\) для проверки значимости коэффициента \(\,\beta_3\,\) имеет`,
    "answers": {
    
            "A": String.raw`
                асимптотически нормальное распределение
            `,
            "B": String.raw`
                \(\,t\,\)-распределение с \(\,n\,\) степенями свободы
            `,
            "C": String.raw`
                \(\,\chi^2\,\)-распределение с одной степенью свободы
            `,
            "D": String.raw`
                \(\,t\,\)-распределение с \(\,n-5\,\) степенями свободы
            `,
            "E": String.raw`
                \(\,t\,\)-распределение с \(\,n-6\,\) степенями свободы
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Тест Саргана для проверки валидности инструментов можно использовать только в том случае, если число инструментов`,
    "answers": {
    
            "A": String.raw`
                больше числа эндогенных переменных
            `,
            "B": String.raw`
                меньше числа эндогенных переменных
            `,
            "C": String.raw`
                совпадает с числом эндогенных переменных
            `,
            "D": String.raw`
                меньше числа экзогенных переменных
            `,
            "E": String.raw`
                совпадает с числом экзогенных переменных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для модели \(\,Y_i = \beta X_i + \varepsilon_i\,\) c \(\,\operatorname{E}(\varepsilon_i) = 0\,\) известно, что оценка \(\,\hat \beta = \frac{\sum_{i=1}^n Y_i}{\sum_{i=1}^n X_i}\,\) обладает наименьшей дисперсией среди линейных несмещённых оценок.  Дисперсии \(\,\operatorname{D}(\varepsilon_i)\,\) пропорциональны`,
    "answers": {
    
            "A": String.raw`
                \(\,1/X_i^2\,\)
            `,
            "B": String.raw`
                \(\,X_i\,\)
            `,
            "C": String.raw`
                \(\,1/X_i\,\)
            `,
            "D": String.raw`
                \(\,\sqrt{X_i}\,\)
            `,
            "E": String.raw`
                \(\,X_i^2\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Переменная \(\,Y_i\,\) принимает значения \(\,0\,\) или \(\,1\,\). Логарифмическая функция правдоподобия, используемая для оценивания логит и пробит моделей, имеет вид`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln (1 - F(X_i \beta)) + (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "B": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) \cdot (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "C": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) + (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "D": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "E": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель \(\,Y_i= \beta_0 + \beta_z Z_{i} + \beta_w W_{i} + \varepsilon\,\) при гетероскедастичности. Стандартная ошибка МНК-оценки, рассчитываемая по формуле \(\,se(\hat\beta_w)=\sqrt{RSS \cdot (X'X)^{-1}_{33}/(n-3)}\,\), является`,
    "answers": {
    
            "A": String.raw`
                несмещённой
            `,
            "B": String.raw`
                смещённой вверх
            `,
            "C": String.raw`
                смещённой
            `,
            "D": String.raw`
                смещённой вниз
            `,
            "E": String.raw`
                состоятельной
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В линейной модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) стохастический регрессор и случайный член \(\,\varepsilon_i\,\) коррелированы. Состоятельные оценки коэффициентов можно получить с помощью`,
    "answers": {
    
            "A": String.raw`
                обобщённого МНК
            `,
            "B": String.raw`
                метода наименьших квадратов
            `,
            "C": String.raw`
                взвешенного МНК
            `,
            "D": String.raw`
                метода главных компонент
            `,
            "E": String.raw`
                метода инструментальных переменных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Стьюдентизированные остатки регрессии используются`,
    "answers": {
    
            "A": String.raw`
                на первом шаге при проведении теста Годфельда-Квандта
            `,
            "B": String.raw`
                в методе главных компонент
            `,
            "C": String.raw`
                на первом шаге двухшагового МНК
            `,
            "D": String.raw`
                в тесте Саргана
            `,
            "E": String.raw`
                для выявления выбросов
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При выполненных условиях регулярности оценки метода максимального правдоподобия могут \textbf{НЕ} являться`,
    "answers": {
    
            "A": String.raw`
                несмещёнными
            `,
            "B": String.raw`
                состоятельными
            `,
            "C": String.raw`
                инвариантными
            `,
            "D": String.raw`
                асимптотически эффективными
            `,
            "E": String.raw`
                асимптотически нормальными
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
{
    "question": String.raw`Использование скорректированных стандартных ошибок Уайта при гомоскедастичности приведет к`,
    "answers": {
    
            "A": String.raw`
                понижению эффективности МНК оценок коэффициентов
            `,
            "B": String.raw`
                смещённости МНК оценок коэффициентов
            `,
            "C": String.raw`
                несостоятельности МНК оценок коэффициентов
            `,
            "D": String.raw`
                получению состоятельной оценки дисперсии случайной ошибки
            `,
            "E": String.raw`
                повышению эффективности МНК оценок коэффициентов
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим логистическую регрессию с пятью регрессорами помимо константы, оцениваемую методом максимального правдоподобия по \(\,n\,\) наблюдениям. Cтатистика \(\,\hat \beta_3 / se(\hat\beta_3)\,\) для проверки значимости коэффициента \(\,\beta_3\,\) имеет`,
    "answers": {
    
            "A": String.raw`
                \(\,\chi^2\,\)-распределение с одной степенью свободы
            `,
            "B": String.raw`
                \(\,t\,\)-распределение с \(\,n\,\) степенями свободы
            `,
            "C": String.raw`
                \(\,t\,\)-распределение с \(\,n-6\,\) степенями свободы
            `,
            "D": String.raw`
                \(\,t\,\)-распределение с \(\,n-5\,\) степенями свободы
            `,
            "E": String.raw`
                асимптотически нормальное распределение
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При выполненных условиях регулярности оценки метода максимального правдоподобия могут \textbf{НЕ} являться`,
    "answers": {
    
            "A": String.raw`
                состоятельными
            `,
            "B": String.raw`
                асимптотически эффективными
            `,
            "C": String.raw`
                асимптотически нормальными
            `,
            "D": String.raw`
                инвариантными
            `,
            "E": String.raw`
                несмещёнными
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В линейной модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) стохастический регрессор и случайный член \(\,\varepsilon_i\,\) коррелированы. Состоятельные оценки коэффициентов можно получить с помощью`,
    "answers": {
    
            "A": String.raw`
                метода инструментальных переменных
            `,
            "B": String.raw`
                метода наименьших квадратов
            `,
            "C": String.raw`
                взвешенного МНК
            `,
            "D": String.raw`
                метода главных компонент
            `,
            "E": String.raw`
                обобщённого МНК
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Стьюдентизированные остатки регрессии используются`,
    "answers": {
    
            "A": String.raw`
                в тесте Саргана
            `,
            "B": String.raw`
                на первом шаге двухшагового МНК
            `,
            "C": String.raw`
                на первом шаге при проведении теста Годфельда-Квандта
            `,
            "D": String.raw`
                в методе главных компонент
            `,
            "E": String.raw`
                для выявления выбросов
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Переменная \(\,Y_i\,\) принимает значения \(\,0\,\) или \(\,1\,\). Логарифмическая функция правдоподобия, используемая для оценивания логит и пробит моделей, имеет вид`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "B": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) + (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "C": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) \cdot (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "D": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln (1 - F(X_i \beta)) + (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "E": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln F(X_i \beta)\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель \(\,Y_i= \beta_0 + \beta_z Z_{i} + \beta_w W_{i} + \varepsilon\,\) при гетероскедастичности. Стандартная ошибка МНК-оценки, рассчитываемая по формуле \(\,se(\hat\beta_w)=\sqrt{RSS \cdot (X'X)^{-1}_{33}/(n-3)}\,\), является`,
    "answers": {
    
            "A": String.raw`
                смещённой
            `,
            "B": String.raw`
                состоятельной
            `,
            "C": String.raw`
                смещённой вниз
            `,
            "D": String.raw`
                смещённой вверх
            `,
            "E": String.raw`
                несмещённой
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для модели \(\,Y_i = \beta X_i + \varepsilon_i\,\) c \(\,\operatorname{E}(\varepsilon_i) = 0\,\) известно, что оценка \(\,\hat \beta = \frac{\sum_{i=1}^n Y_i}{\sum_{i=1}^n X_i}\,\) обладает наименьшей дисперсией среди линейных несмещённых оценок.  Дисперсии \(\,\operatorname{D}(\varepsilon_i)\,\) пропорциональны`,
    "answers": {
    
            "A": String.raw`
                \(\,\sqrt{X_i}\,\)
            `,
            "B": String.raw`
                \(\,1/X_i\,\)
            `,
            "C": String.raw`
                \(\,X_i^2\,\)
            `,
            "D": String.raw`
                \(\,1/X_i^2\,\)
            `,
            "E": String.raw`
                \(\,X_i\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Тест Саргана для проверки валидности инструментов можно использовать только в том случае, если число инструментов`,
    "answers": {
    
            "A": String.raw`
                меньше числа эндогенных переменных
            `,
            "B": String.raw`
                больше числа эндогенных переменных
            `,
            "C": String.raw`
                совпадает с числом эндогенных переменных
            `,
            "D": String.raw`
                совпадает с числом экзогенных переменных
            `,
            "E": String.raw`
                меньше числа экзогенных переменных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Уоррен Баффет проверяет гипотезу \(\,H_0\,\): \(\,g(\beta)=0\,\) для модели \(\,Y_i = \beta_0 + \beta_1 X_{i1} + ... + \beta_k X_{ik} + \varepsilon_i\,\) с помощью теста множителей Лагранжа. Для теста Уоррену необходимо знать оценки параметров`,
    "answers": {
    
            "A": String.raw`
                модели с ограничениями, и модели без ограничений
            `,
            "B": String.raw`
                регрессии на все факторы кроме константы
            `,
            "C": String.raw`
                только модели без ограничений
            `,
            "D": String.raw`
                регрессии на константу
            `,
            "E": String.raw`
                только модели с ограничениями
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
{
    "question": String.raw`В линейной модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) стохастический регрессор и случайный член \(\,\varepsilon_i\,\) коррелированы. Состоятельные оценки коэффициентов можно получить с помощью`,
    "answers": {
    
            "A": String.raw`
                метода наименьших квадратов
            `,
            "B": String.raw`
                метода инструментальных переменных
            `,
            "C": String.raw`
                взвешенного МНК
            `,
            "D": String.raw`
                обобщённого МНК
            `,
            "E": String.raw`
                метода главных компонент
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Стьюдентизированные остатки регрессии используются`,
    "answers": {
    
            "A": String.raw`
                в методе главных компонент
            `,
            "B": String.raw`
                на первом шаге при проведении теста Годфельда-Квандта
            `,
            "C": String.raw`
                для выявления выбросов
            `,
            "D": String.raw`
                в тесте Саргана
            `,
            "E": String.raw`
                на первом шаге двухшагового МНК
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для модели \(\,Y_i = \beta X_i + \varepsilon_i\,\) c \(\,\operatorname{E}(\varepsilon_i) = 0\,\) известно, что оценка \(\,\hat \beta = \frac{\sum_{i=1}^n Y_i}{\sum_{i=1}^n X_i}\,\) обладает наименьшей дисперсией среди линейных несмещённых оценок.  Дисперсии \(\,\operatorname{D}(\varepsilon_i)\,\) пропорциональны`,
    "answers": {
    
            "A": String.raw`
                \(\,1/X_i^2\,\)
            `,
            "B": String.raw`
                \(\,1/X_i\,\)
            `,
            "C": String.raw`
                \(\,\sqrt{X_i}\,\)
            `,
            "D": String.raw`
                \(\,X_i^2\,\)
            `,
            "E": String.raw`
                \(\,X_i\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Уоррен Баффет проверяет гипотезу \(\,H_0\,\): \(\,g(\beta)=0\,\) для модели \(\,Y_i = \beta_0 + \beta_1 X_{i1} + ... + \beta_k X_{ik} + \varepsilon_i\,\) с помощью теста множителей Лагранжа. Для теста Уоррену необходимо знать оценки параметров`,
    "answers": {
    
            "A": String.raw`
                регрессии на все факторы кроме константы
            `,
            "B": String.raw`
                только модели с ограничениями
            `,
            "C": String.raw`
                модели с ограничениями, и модели без ограничений
            `,
            "D": String.raw`
                регрессии на константу
            `,
            "E": String.raw`
                только модели без ограничений
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель \(\,Y_i= \beta_0 + \beta_z Z_{i} + \beta_w W_{i} + \varepsilon\,\) при гетероскедастичности. Стандартная ошибка МНК-оценки, рассчитываемая по формуле \(\,se(\hat\beta_w)=\sqrt{RSS \cdot (X'X)^{-1}_{33}/(n-3)}\,\), является`,
    "answers": {
    
            "A": String.raw`
                смещённой вверх
            `,
            "B": String.raw`
                несмещённой
            `,
            "C": String.raw`
                смещённой
            `,
            "D": String.raw`
                смещённой вниз
            `,
            "E": String.raw`
                состоятельной
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Использование скорректированных стандартных ошибок Уайта при гомоскедастичности приведет к`,
    "answers": {
    
            "A": String.raw`
                понижению эффективности МНК оценок коэффициентов
            `,
            "B": String.raw`
                несостоятельности МНК оценок коэффициентов
            `,
            "C": String.raw`
                смещённости МНК оценок коэффициентов
            `,
            "D": String.raw`
                повышению эффективности МНК оценок коэффициентов
            `,
            "E": String.raw`
                получению состоятельной оценки дисперсии случайной ошибки
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Переменная \(\,Y_i\,\) принимает значения \(\,0\,\) или \(\,1\,\). Логарифмическая функция правдоподобия, используемая для оценивания логит и пробит моделей, имеет вид`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln (1 - F(X_i \beta)) + (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "B": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) \cdot (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "C": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "D": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "E": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) + (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим логистическую регрессию с пятью регрессорами помимо константы, оцениваемую методом максимального правдоподобия по \(\,n\,\) наблюдениям. Cтатистика \(\,\hat \beta_3 / se(\hat\beta_3)\,\) для проверки значимости коэффициента \(\,\beta_3\,\) имеет`,
    "answers": {
    
            "A": String.raw`
                \(\,t\,\)-распределение с \(\,n\,\) степенями свободы
            `,
            "B": String.raw`
                \(\,t\,\)-распределение с \(\,n-5\,\) степенями свободы
            `,
            "C": String.raw`
                \(\,t\,\)-распределение с \(\,n-6\,\) степенями свободы
            `,
            "D": String.raw`
                \(\,\chi^2\,\)-распределение с одной степенью свободы
            `,
            "E": String.raw`
                асимптотически нормальное распределение
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При выполненных условиях регулярности оценки метода максимального правдоподобия могут \textbf{НЕ} являться`,
    "answers": {
    
            "A": String.raw`
                асимптотически эффективными
            `,
            "B": String.raw`
                несмещёнными
            `,
            "C": String.raw`
                состоятельными
            `,
            "D": String.raw`
                асимптотически нормальными
            `,
            "E": String.raw`
                инвариантными
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Тест Саргана для проверки валидности инструментов можно использовать только в том случае, если число инструментов`,
    "answers": {
    
            "A": String.raw`
                совпадает с числом эндогенных переменных
            `,
            "B": String.raw`
                больше числа эндогенных переменных
            `,
            "C": String.raw`
                меньше числа экзогенных переменных
            `,
            "D": String.raw`
                совпадает с числом экзогенных переменных
            `,
            "E": String.raw`
                меньше числа эндогенных переменных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
{
    "question": String.raw`В линейной модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) стохастический регрессор и случайный член \(\,\varepsilon_i\,\) коррелированы. Состоятельные оценки коэффициентов можно получить с помощью`,
    "answers": {
    
            "A": String.raw`
                метода наименьших квадратов
            `,
            "B": String.raw`
                метода инструментальных переменных
            `,
            "C": String.raw`
                обобщённого МНК
            `,
            "D": String.raw`
                взвешенного МНК
            `,
            "E": String.raw`
                метода главных компонент
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Тест Саргана для проверки валидности инструментов можно использовать только в том случае, если число инструментов`,
    "answers": {
    
            "A": String.raw`
                меньше числа эндогенных переменных
            `,
            "B": String.raw`
                совпадает с числом экзогенных переменных
            `,
            "C": String.raw`
                совпадает с числом эндогенных переменных
            `,
            "D": String.raw`
                меньше числа экзогенных переменных
            `,
            "E": String.raw`
                больше числа эндогенных переменных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Переменная \(\,Y_i\,\) принимает значения \(\,0\,\) или \(\,1\,\). Логарифмическая функция правдоподобия, используемая для оценивания логит и пробит моделей, имеет вид`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln F(X_i \beta)\,\)
            `,
            "B": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) \cdot (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "C": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) + (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "D": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln F(X_i \beta) - (1 - Y_i) \ln (1 - F(X_i \beta))\,\)
            `,
            "E": String.raw`
                \(\,\ln L = \sum_{i=1}^n Y_i \ln (1 - F(X_i \beta)) + (1 - Y_i) \ln F(X_i \beta)\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Стьюдентизированные остатки регрессии используются`,
    "answers": {
    
            "A": String.raw`
                в методе главных компонент
            `,
            "B": String.raw`
                на первом шаге двухшагового МНК
            `,
            "C": String.raw`
                в тесте Саргана
            `,
            "D": String.raw`
                для выявления выбросов
            `,
            "E": String.raw`
                на первом шаге при проведении теста Годфельда-Квандта
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При выполненных условиях регулярности оценки метода максимального правдоподобия могут \textbf{НЕ} являться`,
    "answers": {
    
            "A": String.raw`
                инвариантными
            `,
            "B": String.raw`
                асимптотически нормальными
            `,
            "C": String.raw`
                асимптотически эффективными
            `,
            "D": String.raw`
                состоятельными
            `,
            "E": String.raw`
                несмещёнными
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим логистическую регрессию с пятью регрессорами помимо константы, оцениваемую методом максимального правдоподобия по \(\,n\,\) наблюдениям. Cтатистика \(\,\hat \beta_3 / se(\hat\beta_3)\,\) для проверки значимости коэффициента \(\,\beta_3\,\) имеет`,
    "answers": {
    
            "A": String.raw`
                \(\,\chi^2\,\)-распределение с одной степенью свободы
            `,
            "B": String.raw`
                асимптотически нормальное распределение
            `,
            "C": String.raw`
                \(\,t\,\)-распределение с \(\,n\,\) степенями свободы
            `,
            "D": String.raw`
                \(\,t\,\)-распределение с \(\,n-6\,\) степенями свободы
            `,
            "E": String.raw`
                \(\,t\,\)-распределение с \(\,n-5\,\) степенями свободы
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель \(\,Y_i= \beta_0 + \beta_z Z_{i} + \beta_w W_{i} + \varepsilon\,\) при гетероскедастичности. Стандартная ошибка МНК-оценки, рассчитываемая по формуле \(\,se(\hat\beta_w)=\sqrt{RSS \cdot (X'X)^{-1}_{33}/(n-3)}\,\), является`,
    "answers": {
    
            "A": String.raw`
                смещённой
            `,
            "B": String.raw`
                несмещённой
            `,
            "C": String.raw`
                состоятельной
            `,
            "D": String.raw`
                смещённой вниз
            `,
            "E": String.raw`
                смещённой вверх
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Использование скорректированных стандартных ошибок Уайта при гомоскедастичности приведет к`,
    "answers": {
    
            "A": String.raw`
                смещённости МНК оценок коэффициентов
            `,
            "B": String.raw`
                повышению эффективности МНК оценок коэффициентов
            `,
            "C": String.raw`
                получению состоятельной оценки дисперсии случайной ошибки
            `,
            "D": String.raw`
                понижению эффективности МНК оценок коэффициентов
            `,
            "E": String.raw`
                несостоятельности МНК оценок коэффициентов
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Уоррен Баффет проверяет гипотезу \(\,H_0\,\): \(\,g(\beta)=0\,\) для модели \(\,Y_i = \beta_0 + \beta_1 X_{i1} + ... + \beta_k X_{ik} + \varepsilon_i\,\) с помощью теста множителей Лагранжа. Для теста Уоррену необходимо знать оценки параметров`,
    "answers": {
    
            "A": String.raw`
                только модели без ограничений
            `,
            "B": String.raw`
                регрессии на все факторы кроме константы
            `,
            "C": String.raw`
                регрессии на константу
            `,
            "D": String.raw`
                только модели с ограничениями
            `,
            "E": String.raw`
                модели с ограничениями, и модели без ограничений
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для модели \(\,Y_i = \beta X_i + \varepsilon_i\,\) c \(\,\operatorname{E}(\varepsilon_i) = 0\,\) известно, что оценка \(\,\hat \beta = \frac{\sum_{i=1}^n Y_i}{\sum_{i=1}^n X_i}\,\) обладает наименьшей дисперсией среди линейных несмещённых оценок.  Дисперсии \(\,\operatorname{D}(\varepsilon_i)\,\) пропорциональны`,
    "answers": {
    
            "A": String.raw`
                \(\,\sqrt{X_i}\,\)
            `,
            "B": String.raw`
                \(\,X_i^2\,\)
            `,
            "C": String.raw`
                \(\,1/X_i\,\)
            `,
            "D": String.raw`
                \(\,X_i\,\)
            `,
            "E": String.raw`
                \(\,1/X_i^2\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,

    ]
init_question();
var result_array=new Array(questions.length);