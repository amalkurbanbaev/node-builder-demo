import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
  { name: "Чат-бот поддержки", description: "Автоматизированный помощник для клиентов." },
  { name: "Анализатор данных", description: "Агент для обработки и анализа данных." },
  { name: "Генератор контента", description: "Создает тексты, изображения и другой контент." },
  { name: "Персональный ассистент", description: "Умный помощник для повседневных задач." },
  { name: "AI Код-ревьюер", description: "Автоматический анализ и комментарии к коду." },
];

export default function TemplatesView() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Шаблоны AI-агентов</h1>
      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.name}>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">{template.description}</p>
              <Button>Использовать шаблон</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
