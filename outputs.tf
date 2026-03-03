output "alb_dns_name" {
  value = aws_lb.alb.dns_name
}

output "rds_endpoint" {
  value = aws_db_instance.postgres.address
  sensitive = true
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.cluster.name
}